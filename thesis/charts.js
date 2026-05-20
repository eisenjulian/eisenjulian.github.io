/* ======================================= */
/*  Chart.js Data for PhD Defense Slides    */
/*  Charts animate on each slide entrance   */
/* ======================================= */

const chartInstances = {};

/**
 * Destroy all existing chart instances so they can be
 * recreated with a fresh entrance animation.
 */
function destroyAllCharts() {
  for (const key in chartInstances) {
    if (chartInstances[key]) {
      chartInstances[key].destroy();
    }
  }
  Object.keys(chartInstances).forEach(key => delete chartInstances[key]);
}

/**
 * Called on every slide transition.  Only the chart(s)
 * whose <canvas> lives inside `slide` are created;
 * everything else is destroyed so it re-animates later.
 */
function initChartsOnSlide(slide) {
  if (!slide) return;
  destroyAllCharts();

  const animOpts = { duration: 900, easing: 'easeOutQuart' };

  // ---- TabFact Results ----
  const tabfactEl = slide.querySelector('#tabfactChart');
  if (tabfactEl) {
    chartInstances.tabfact = new Chart(tabfactEl, {
      type: 'bar',
      data: {
        labels: ['Table-BERT', 'LFC', 'TAPAS\n(Mask-LM)', 'TAPAS\n(SQA)', 'TAPAS\n(C+S Base)', 'TAPAS\n(C+S Large)', 'Human'],
        datasets: [{
          label: 'Test Accuracy (%)',
          data: [65.1, 71.7, 69.9, 74.6, 78.5, 81.0, 92.1],
          backgroundColor: [
            'rgba(148,163,184,0.6)', 'rgba(148,163,184,0.6)',
            'rgba(59,130,246,0.4)', 'rgba(59,130,246,0.5)',
            'rgba(59,130,246,0.8)', 'rgba(56,189,248,0.9)',
            'rgba(52,211,153,0.6)'
          ],
          borderColor: [
            'rgba(148,163,184,0.8)', 'rgba(148,163,184,0.8)',
            'rgba(59,130,246,0.6)', 'rgba(59,130,246,0.7)',
            'rgba(59,130,246,1)', 'rgba(56,189,248,1)',
            'rgba(52,211,153,0.8)'
          ],
          borderWidth: 1,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: animOpts,
        scales: {
          y: { beginAtZero: false, min: 55, max: 95, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          x: { ticks: { color: '#94a3b8', font: { size: 10 } }, grid: { display: false } }
        },
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'TabFact Test Accuracy', color: '#e2e8f0', font: { size: 14 } }
        }
      }
    });
  }

  // ---- MatCha Main Results ----
  const matchaEl = slide.querySelector('#matchaChart');
  if (matchaEl) {
    chartInstances.matcha = new Chart(matchaEl, {
      type: 'bar',
      data: {
        labels: ['ChartQA (avg)', 'PlotQA (avg)', 'Chart-to-Text (avg)', 'Overall avg'],
        datasets: [
          {
            label: 'T5-OCR',
            data: [41.0, 64.4, 22.9, 42.8],
            backgroundColor: 'rgba(148,163,184,0.5)',
            borderRadius: 4
          },
          {
            label: 'Pix2Struct',
            data: [56.0, 72.5, 24.2, 50.9],
            backgroundColor: 'rgba(245,158,11,0.5)',
            borderRadius: 4
          },
          {
            label: 'PaLI-17B',
            data: [47.6, 39.8, 26.3, 37.9],
            backgroundColor: 'rgba(167,139,250,0.5)',
            borderRadius: 4
          },
          {
            label: 'MatCha (ours)',
            data: [64.2, 91.5, 25.8, 60.5],
            backgroundColor: 'rgba(16,185,129,0.8)',
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: animOpts,
        scales: {
          y: { beginAtZero: true, max: 100, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          x: { ticks: { color: '#94a3b8', font: { size: 11 } }, grid: { display: false } }
        },
        plugins: {
          legend: { position: 'top', labels: { color: '#94a3b8', font: { size: 11 } } },
          title: { display: true, text: 'End-to-End Chart Understanding Results', color: '#e2e8f0', font: { size: 14 } }
        }
      }
    });
  }

  // ---- Ablation ----
  const ablationEl = slide.querySelector('#ablationChart');
  if (ablationEl) {
    chartInstances.ablation = new Chart(ablationEl, {
      type: 'bar',
      data: {
        labels: ['Full MatCha', '− Math\nReasoning', '− Chart\nDe-rendering', '− Screenshot\nParsing', '− DROP', '− Real-world\nPairs', '− Chart-to-Code'],
        datasets: [{
          label: 'ChartQA avg (%)',
          data: [63.0, 60.6, 59.1, 61.4, 61.3, 61.0, 61.9],
          backgroundColor: [
            'rgba(16,185,129,0.8)',
            'rgba(245,158,11,0.6)', 'rgba(245,158,11,0.6)', 'rgba(245,158,11,0.6)',
            'rgba(167,139,250,0.5)', 'rgba(167,139,250,0.5)', 'rgba(167,139,250,0.5)'
          ],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: animOpts,
        indexAxis: 'y',
        scales: {
          x: { min: 55, max: 65, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          y: { ticks: { color: '#94a3b8', font: { size: 10 } }, grid: { display: false } }
        },
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Pre-training Ablation (ChartQA avg)', color: '#e2e8f0', font: { size: 14 } }
        }
      }
    });
  }

  // ---- DePlot Results ----
  const deplotEl = slide.querySelector('#deplotChart');
  if (deplotEl) {
    chartInstances.deplot = new Chart(deplotEl, {
      type: 'bar',
      data: {
        labels: ['ChartQA\naug.', 'ChartQA\nhuman', 'ChartQA\navg.'],
        datasets: [
          {
            label: 'Pix2Struct (fine-tuned)',
            data: [81.6, 30.5, 56.0],
            backgroundColor: 'rgba(245,158,11,0.5)',
            borderRadius: 4
          },
          {
            label: 'MatCha (fine-tuned)',
            data: [90.2, 38.2, 64.2],
            backgroundColor: 'rgba(16,185,129,0.7)',
            borderRadius: 4
          },
          {
            label: 'DePlot+FlanPaLM+Codex (1-shot)',
            data: [91.0, 67.6, 79.3],
            backgroundColor: 'rgba(56,189,248,0.85)',
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: animOpts,
        scales: {
          y: { beginAtZero: true, max: 100, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          x: { ticks: { color: '#94a3b8', font: { size: 11 } }, grid: { display: false } }
        },
        plugins: {
          legend: { position: 'top', labels: { color: '#94a3b8', font: { size: 10 } } },
          title: { display: true, text: 'DePlot+LLM vs Fine-tuned Models on ChartQA', color: '#e2e8f0', font: { size: 14 } }
        }
      }
    });
  }

  // ---- MatCha Fine-grained Analysis ----
  const fgEl = slide.querySelector('#finegrainedChart');
  if (fgEl) {
    chartInstances.finegrained = new Chart(fgEl, {
      type: 'bar',
      data: {
        labels: ['Data extraction', 'Math reasoning', 'Plot attributes'],
        datasets: [
          {
            label: 'PaLI',
            data: [51.9, 26.2, 28.6],
            backgroundColor: 'rgba(148,163,184,0.6)',
            borderRadius: 4
          },
          {
            label: 'Pix2Struct',
            data: [69.2, 23.8, 1.0],
            backgroundColor: 'rgba(245,158,11,0.6)',
            borderRadius: 4
          },
          {
            label: 'MatCha (ours)',
            data: [76.9, 31.0, 14.3],
            backgroundColor: 'rgba(16,185,129,0.8)',
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: animOpts,
        scales: {
          y: {
            beginAtZero: true, max: 85, ticks: { color: '#94a3b8', stepSize: 10 }, grid: { color: 'rgba(255,255,255,0.05)' },
            title: { display: true, text: 'Accuracy (%)', color: '#94a3b8', font: { size: 12 } }
          },
          x: { ticks: { color: '#94a3b8', font: { size: 11 } }, grid: { display: false } }
        },
        plugins: {
          legend: { position: 'top', labels: { color: '#94a3b8', font: { size: 11 } } },
          title: { display: true, text: 'Performance by Question Category', color: '#e2e8f0', font: { size: 14 } }
        }
      }
    });
  }

  // ---- ECE (lower is better) ----
  const eceEl = slide.querySelector('#eceChart');
  if (eceEl) {
    chartInstances.ece = new Chart(eceEl, {
      type: 'bar',
      data: {
        labels: ['Likelihood', 'Repetition', 'Diversity', 'Avg BLEU (ours)'],
        datasets: [{
          label: 'ECE (%)',
          data: [18.2, 15.5, 16.8, 11.3],
          backgroundColor: [
            'rgba(148,163,184,0.6)',
            'rgba(245,158,11,0.6)',
            'rgba(167,139,250,0.5)',
            'rgba(16,185,129,0.8)'
          ],
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,

        animation: animOpts,
        indexAxis: 'y',
        scales: {
          x: { beginAtZero: true, max: 20, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          y: { ticks: { color: '#94a3b8', font: { size: 11 } }, grid: { display: false } }
        },
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'ECE ↓ (lower is better)', color: '#e2e8f0', font: { size: 13 } }
        }
      }
    });
  }

  // ---- ROC-AUC (higher is better) ----
  const rocEl = slide.querySelector('#rocaucChart');
  if (rocEl) {
    chartInstances.rocauc = new Chart(rocEl, {
      type: 'bar',
      data: {
        labels: ['Likelihood', 'Repetition', 'Diversity', 'Avg BLEU (ours)'],
        datasets: [{
          label: 'ROC-AUC (%)',
          data: [62.5, 66.8, 64.2, 72.1],
          backgroundColor: [
            'rgba(148,163,184,0.6)',
            'rgba(245,158,11,0.6)',
            'rgba(167,139,250,0.5)',
            'rgba(16,185,129,0.8)'
          ],
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: animOpts,
        indexAxis: 'y',
        scales: {
          x: { min: 55, max: 75, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          y: { ticks: { color: '#94a3b8', font: { size: 11 } }, grid: { display: false } }
        },
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'ROC-AUC ↑ (higher is better)', color: '#e2e8f0', font: { size: 13 } }
        }
      }
    });
  }
}
