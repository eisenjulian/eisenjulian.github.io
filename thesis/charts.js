/* ======================================= */
/*  Chart.js Data for PhD Defense Slides    */
/* ======================================= */

const chartInstances = {};

function initCharts() {
  // TabFact Results Chart
  const tabfactEl = document.getElementById('tabfactChart');
  if (tabfactEl && !chartInstances.tabfact) {
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
        maintainAspectRatio: true,
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

  // MatCha Results Chart
  const matchaEl = document.getElementById('matchaChart');
  if (matchaEl && !chartInstances.matcha) {
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
        maintainAspectRatio: true,
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

  // Ablation Chart
  const ablationEl = document.getElementById('ablationChart');
  if (ablationEl && !chartInstances.ablation) {
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
        maintainAspectRatio: true,
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

  // DePlot Results Chart
  const deplotEl = document.getElementById('deplotChart');
  if (deplotEl && !chartInstances.deplot) {
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
        maintainAspectRatio: true,
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

  // Calibration Chart
  const calEl = document.getElementById('calibrationChart');
  if (calEl && !chartInstances.calibration) {
    chartInstances.calibration = new Chart(calEl, {
      type: 'bar',
      data: {
        labels: ['ECE ↓', 'ROC-AUC ↑'],
        datasets: [
          {
            label: 'Likelihood',
            data: [18.2, 62.5],
            backgroundColor: 'rgba(148,163,184,0.6)',
            borderRadius: 4
          },
          {
            label: 'Repetition',
            data: [15.5, 66.8],
            backgroundColor: 'rgba(245,158,11,0.6)',
            borderRadius: 4
          },
          {
            label: 'Diversity',
            data: [16.8, 64.2],
            backgroundColor: 'rgba(167,139,250,0.5)',
            borderRadius: 4
          },
          {
            label: 'Avg BLEU (ours)',
            data: [11.3, 72.1],
            backgroundColor: 'rgba(16,185,129,0.8)',
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: { beginAtZero: true, max: 80, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          x: { ticks: { color: '#94a3b8', font: { size: 11 } }, grid: { display: false } }
        },
        plugins: {
          legend: { position: 'top', labels: { color: '#94a3b8', font: { size: 11 } } },
          title: { display: true, text: 'Calibration Methods on VizWiz-VQA', color: '#e2e8f0', font: { size: 14 } }
        }
      }
    });
  }
}
