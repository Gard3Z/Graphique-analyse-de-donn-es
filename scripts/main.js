
function unpack(rows, key) {
  return rows.map((row) => row[key]);
}

// GRAPHIQUE 1
const plot1 = document.getElementById('plot1');

async function main1() {
  const rows = await d3.csv('dataset/resultats_sondage_MMI1.csv');
  const disciplines = new Set();
  const counts = {};
  const data = []

  rows.forEach(row => { 
    disciplines.add(row["Discipline-favorite"]);
    if(!data[row["Discipline-favorite"]]) {
      data[row["Discipline-favorite"]] = {
        x: [],
        y: [],
        mode: 'markers',
        type: 'scatter',
        name: row["Discipline-favorite"],
        marker: { size: 8 }
      }
    }
    data[row["Discipline-favorite"]].x.push(row["Discipline-favorite"]);
    data[row["Discipline-favorite"]].y.push(row["Jeux-video"]);
  });
  // trier les données
  const dataToPlot = Object.values(data);
  dataToPlot.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  // description du graphique lui-même
  // éléments de mise en page
  const layout1 = {
  width: 740,
  xaxis: {
    title: {
      text: 'Discipline préférée',
      font: {
        family: 'Oswald-light',
        size: 18,
        color: '#EDEDED'
      }
    },
    tickfont: {
      family: 'Oswald-light',
      size: 14,
      color: '#EDEDED'
    }
  },
  yaxis: {
    title: {
      text: 'Nombre d\'heures de jeux vidéo par semaine',
      font: {
        family: 'Oswald-light',
        size: 18,
        color: '#EDEDED'
      }
    },
    tickfont: {
      family: 'Oswald-light',
      size: 14,
      color: '#EDEDED'
    }
  },
  plot_bgcolor: 'rgba(0,0,0,0)',
  paper_bgcolor: 'rgba(0,0,0,0)',
  showlegend: false
  };

  
  // déclenche le dessin lui-même
  Plotly.newPlot(plot1, dataToPlot, layout1);
  }
  
  main1();


// GRAPHIQUE 2
const plot2 = document.getElementById('plot2');

async function main2() {
  const rows = await d3.csv('dataset/resultats_sondage_MMI1.csv');
  const styles = new Set();
  const counts = {};

  rows.forEach(row => {
    if (row['Jeux-video'] !== "non") {
      styles.add(row["Style-vestimentaire-favori"]);
      counts[row["Style-vestimentaire-favori"]] = counts[row["Style-vestimentaire-favori"]] ? counts[row["Style-vestimentaire-favori"]] + 1 : 1;
    }
  });

  // Transformer l'ensemble en tableau et le trier en utilisant la fonction de comparaison
  const data = Array.from(styles);
  data.sort((a, b) => counts[b] - counts[a]);
  
  // description du graphique lui-même
  const trace2 = {
    x: data,
    y: data.map(style => counts[style]),
    type: 'bar',
    marker: {
      color: '#DA0037'
    }
  };

  // éléments de mise en page
  const layout2 = {
    width: 700,
    xaxis: {
      title: {
        text: 'Style vestimentaire',
        font: {
          family: 'Oswald-light',
          size: 18,
          color: '#ededed'
        }
      },
      tickfont: {
        family: 'Oswald-light',
        size: 14,
        color: '#ededed'
      }
    },
    yaxis: {
      title: {
        text: 'nombre de personnes',
        font: {
          family: 'Oswald-light',
          size: 18,
          color: '#ededed'
        }
      },
      tickfont: {
        family: 'Oswald-light',
        size: 14,
        color: '#ededed'
      }
    },
    plot_bgcolor: 'rgba(0,0,0,0)',
    paper_bgcolor: 'rgba(0,0,0,0)'
  };

  // déclenche le dessin lui-même
  Plotly.newPlot(plot2, [trace2], layout2);

  // GRAPHIQUE INVISIBLE
  Plotly.animate(plot2, {
    data: [{y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}],
    traces: [0],
    layout: {}
  }, {
    transition: {
      duration: 0,
      easing: 'cubic-in-out'
    },
    frame: {
      duration: 0,
      redraw: false
    }
  });

  // APPARITION DU GRAPHIQUE
  // commence l'animation si la page est déjà descendue

  window.addEventListener('scroll', function(){
    var section4 = document.getElementById('section4');
    var section4Position = section4.getBoundingClientRect().top;
  
    if(section4Position <= 600){
        Plotly.animate(plot2, {
          data: [{y: data.map(style => counts[style])}],
          traces: [0],
          layout: {}
        }, {
          transition: {
            duration: 2000,
            easing: 'cubic-in-out'
          },
          frame: {
            duration: 2000,
            redraw: false
          }
        });
        }
    }
  )
}

main2();


// GRAPHIQUE 3
const plot3 = document.getElementById('plot3');

async function main3() {
  const rows = await d3.csv('dataset/resultats_sondage_MMI1.csv');

  //extraire les personnes qui ont repondu une valeur superieur a 0 pour Jeux-video
  const jeuxVideo = unpack(rows, 'Jeux-video');
  const rowsJeux = rows.filter((row, index) => jeuxVideo[index] > 0);

  //calculer la note moyenne pour chaque style musical
  const noteTechnoElectro = d3.mean(unpack(rowsJeux, 'techno_electro'));
  const noteClassique = d3.mean(unpack(rowsJeux, 'classique'));
  const noteMetal = d3.mean(unpack(rowsJeux, 'metal'));
  const noteRapHipHop = d3.mean(unpack(rowsJeux, 'rap_hip-hop'));
  const noteJazz = d3.mean(unpack(rowsJeux, 'jazz'));
  const noteFolk = d3.mean(unpack(rowsJeux, 'folk '));

  // Utiliser un tableau pour stocker les données de jeux vidéo et de notes de style musical
  const data3 = [
    {
      labels: ['techno_electro', 'classique', 'metal', 'rap_hip-hop', 'jazz', 'folk '],
      values: [noteTechnoElectro, noteClassique, noteMetal, noteRapHipHop, noteJazz, noteFolk], 
    type: 'pie'
  },
];

// éléments de mise en page
const layout3 = {
  width: 700,
  
  // change la couleur des labels
  font: {
    family: 'Oswald-light',
    color: '#ededed'
  },
  paper_bgcolor: 'rgba(0,0,0,0)'
};
Plotly.newPlot(plot3, data3, layout3);

// CHANGE LES COULEURS DU GRAPHIQUE
Plotly.restyle(plot3, 'marker.colors', [['#e44952', '#f3b0ac', '#f1908d', '#da0037d0', '#eb6f6f', '#f2cecc']]);
}

main3();


// GRAPHIQUE 4
const plot4 = document.getElementById('plot4');

async function main4() {
  const rows = await d3.csv('dataset/resultats_sondage_MMI1.csv');
  // Utiliser un objet pour stocker les comptes
  const counts = {
    "garçon": 0,
    "fille": 0
  };

  // Boucle sur les lignes pour compter le nombre d'hommes et de femmes jouant aux jeux vidéo
  rows.forEach(row => {
    if (row["Jeux-video"] !== "0") {
      counts[row["genre"]] += 1;
    }
  });
  const data4 = [
    {
      values: [counts["garçon"], counts["fille"]],
      labels: ['garçon', 'fille'],
      type: 'pie'
    }
  ];

  // éléments de mise en page
  const layout4 = {
    width: 700,
   
    // change la couleur des labels
    font: {
      family: 'Oswald-light',
      color: '#ededed'
    },
    paper_bgcolor: 'rgba(0,0,0,0)'
  };

  Plotly.newPlot(plot4, data4, layout4);

  // CHANGE LES COULEURS DU GRAPHIQUE
  Plotly.restyle(plot4, 'marker.colors', [['#da0037d0','#f1908d']]);

}

main4();


// GRAPHIQUE 5
const plot5 = document.getElementById('plot5');

async function main5() {
  const rows = await d3.csv('dataset/resultats_sondage_MMI1.csv');
  // description du graphique lui-même
  const trace5 = {
    x: unpack(rows, 'Jeux-video'),
    y: unpack(rows, 'sport'),
    mode: 'markers',
    type: 'scatter',
    marker: {
      color: '#DA0037',
      size: 12,
      symbol: 'circle'
    }
  };

  // éléments de mise en page
  const layout5 = {
    width: 745,
    xaxis: {
      title: {
        text: 'Temps consacré aux jeux vidéo',
        font: {
          family: 'Oswald-light',
          size: 18,
          color: '#ededed'
        }
      },
      tickfont: {
        family: 'Oswald-light',
        size: 14,
        color: '#ededed'
      }
    },
    yaxis: {
      title: {
        text: 'Temps consacré aux pratiques sportives',
        font: {
          family: 'Oswald-light',
          size: 18,
          color: '#ededed'
        }
      },
      tickfont: {
        family: 'Oswald-light',
        size: 14,
        color: '#ededed'
      }
    },
    plot_bgcolor: 'rgba(0,0,0,0)',
    paper_bgcolor: 'rgba(0,0,0,0)'
  };

  // déclenche le dessin lui-même
  Plotly.newPlot(plot5, [trace5], layout5);
}

// 'Temps consacré aux jeux vidéo'
// 'Temps consacré aux pratiques sportives'
main5();