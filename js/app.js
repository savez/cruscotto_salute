var modulo = angular.module('cruscotto_salute', []);

  function CruscottoSaluteCtrl($scope){
  	$scope.calculateDate = function(dati){
      // mapping risultati => messaggio
      var mapping = new Array(); // BMI,COLESTEROLO, CLICEMIA, PRESSIONE
      mapping['0000'] = {'titolo': "Tutto bene!",'stato': 'success','messaggio': "Ti prendi cura della tua salute, vai avanti cos&igrave;. <br /> Ti suggeriamo di mantenere sotto controllo peso e pressione, di fare un esame del sangue una volta ogni due anni e di tenere aggiornato il tuo medico di base.",'icona':'icon-thumbs-up'};
      mapping['1000'] = {'titolo': "Sei sovrappeso.",'stato': 'error','messaggio': "Un sovrappeso modesto non costituisce un rischio per la salute, ma &egrave; necessario tenere sotto controllo la situazione. Col tempo, infatti, il sovrappeso pu&ograve; favorire l'insorgenza del diabete e avere effeti nocivi per l'apparato cardio-circolatorio! <br /> Con la semplice correzione di abitudini alimentari sbagliate e con un po' di attivit&agrave; fisica, il tuo peso corporeo pu&ograve; rientrare nei limiti di norma. ",'icona':'icon-thumbs-down'};
      mapping['1100'] = {'titolo': "Sei sovrappeso e hai i livelli di grassi (colesterolo - trigliceridi) alti.",'stato': 'error','messaggio': "Sovrappeso e livelli di colesterolo - trigliceridi elevati nel sangue, se protratti nel tempo, sono fattori pericolosi per il sistema cardio-vascolare. <br /> Una dieta appropriata &egrave; in grado di correggere entrambi. Non dimenticare che anche quando raggiungi un peso soddisfacente, &egrave; prudente tenere sotto controllo il colosterolo e i lipidi con esami del sangue. ",'icona':'icon-thumbs-down'};
      mapping['1110'] = {'titolo': "Sei sovrappeso, hai colesterolo - trigliceridi e glicemia alti.",'stato': 'error','messaggio': "Questi parametri aumentano il rischio d'insorgenza di complicanze cardio-vascolari. <br /> Al di l&agrave; di una predisposizione familiare, queste alterazioni sono per lo pi&ugrave; causate da un'alimentazione scorretta. <br /> In genere, seguendo una dieta appropriata possiamo ottenere un calo di peso e una successiva normalizzazione dei valori ematici di zuccheri e grassi. <br /> Tieni comunque sempre sotto controllo questi parametri, anche quando il tuo peso corporeo &egrave; sceso: se si rivelassero ancora alterati, potrebbe essere necessario un approfondimento diagnostico e un'eventuale terapia farmacologica.",'icona':'icon-thumbs-down'};
      mapping['1111'] = {'titolo': "Sovrappeso, alterazione del metabolismo di grassi e zuccheri e pressione alta, se associati, rappresentano un'importante condizione di rischio per lo sviluppo di complicanze cardiache e vascolari.",'stato': 'error','messaggio': "E' fondamentale correggere questi valori! <br /> Primo passo: una corretta dieta (con ridotto apporto anche salino) che modifichi progressivamente il peso; in molti casi si ottiene parallelamente la correzione delle alterazioni metaboliche legate alla scorretta alimentazione. <br /> Anche la pressione pu&ograve; conseguentemente migliorare, ma lo stato ipertensivo in molti casi rappresenta una condizione patologica non legata al sovrappeso e pertento richiede indagini mirate ed una terapia farmacologica.",'icona':'icon-thumbs-down'};
      mapping['0100'] = {'titolo': "I livelli di grassi (colesterolo - trigliceridi) nel sangue sono fuori dal normale.",'stato': 'error','messaggio': "La presenza di colesterolo - trigliceridi &egrave; quasi sempre legata ad una scorretta alimentazione, anche se ci sono situazioni ormonali particolari (per esempio: la menopausa nella donna) che facilitano a loro volta questa alterazione. <br /> In generale, un'alimentazione pi&ugrave; congrua e uno stile di vita che contempli maggiore attivit&agrave; fisica rappresentano spesso un rimedio efficace. <br /> Quando tali provvedimenti non risultano efficaci, pu&ograve; essere indicato l'uso di farmaci sotto controllo medico e accertamenti diagnostici mirati (specie nei rari casi che presentino una netta predisposizione familiare).",'icona':'icon-thumbs-down'};
      mapping['0110'] = {'titolo': "Hai colesterolo - trigliceridi e glicemia alti.",'stato': 'error','messaggio': "La presenza di elevati valori di gracolesterolo e zuccheri nel sangue &egrave; spesso legata ad un'alimentazione scorretta, anche in assenza di sovrappeso. <br /> Attraverso una dieta appropriata &egrave; possibile dimostrare se tale supposizione &egrave; corretta. <br /> Tieni comunque sempre sotto controllo questi parametri, anche quando hai verificato una loro correzione con la dieta; se riscontri alterazioni che persistono, si rende necessario un approfondimento diagnostico mirato.",'icona':'icon-thumbs-down'};
      mapping['0111'] = {'titolo': "Hai livelli ematici di colesterolo - trigliceridi, di zuccheri e di pressione elevati.",'stato': 'error','messaggio': "La presenza di queste alterazioni metaboliche associate ad ipertensione rappresentano una condizione che favorisce lo sviluppo nel tempo di complicanze cardiache e vascolari. <br /> Tale rischio &egrave; pi&ugrave; elevato quanto queste alterazioni sono pi&ugrave; marcate e protratte nel tempo. <br /> Anche in assenza di sovrappeso, nei casi meno gravi una dieta ipocalorica appropriata, che comprenda anche una riduzione dell'assunzione di sale (1-2g al giorno), pu&ograve; correggere sia le alterazioni metaboliche che la pressione arteriosa. <br /> Nel caso che la dieta non si dimostri efficace o corregga solo parzialmente le alterazioni , si rende necessario un approfondimento diagnostico sia metabolico che cardiologico, allo scopo di individuare il trattamento pi&ugrave; corretto. ",'icona':'icon-thumbs-down'};
      mapping['0010'] = {'titolo': "Hai la glicemia elevata.",'stato': 'error','messaggio': "Un'iperglicemia a digiuno potrebbe essere causata da malattia diabetica latente o in atto. <br /> Spesso, per&ograve;, &egrave; semplicemente legata a una dieta troppo ricca di zuccheri: quindi pu&ograve; essere rapidamente corretta con un'alimentazione equilibrata. <br /> Se questo non accade, un'iperglicemia che persiste nel tempo favorisce l'insorgenza di un diabete stabile, con tutte le sue conseguenze. <br /> Se la glicemia resta alta nonostante una corretta alimentazione, ti suggeriamo un approfondimento diagnostico mirato.",'icona':'icon-thumbs-down'};
      mapping['0011'] = {'titolo': "Hai la glicemia elevata e la pressione alta.",'stato': 'error','messaggio': "L'iperglicemia a digiuno, associata a pressione alta e in assenza di sovrappeso (specie se &egrave; presente una familiarit&agrave; per le stesse condizioni) necessita un esame approfondito del metabolismo degli zuccheri, che permette di evidenziare un eventuale stato diabetico o pre-diabetico e una valutazione cardiologica per la pressione alta. <br /> Confrontati con il medico di fiducia sulle tue abitudini alimentari: una correta dieta &egrave; comunque il primo provvedimento da attuarsi in questi casi.",'icona':'icon-thumbs-down'};
      mapping['0001'] = {'titolo': "Hai la pressione alta.",'stato': 'error','messaggio': "In caso di pressione alta, anche se moderata e non costante, tieni periodicamente sotto controllo i suoi valori. Una dieta con scarso apporto di sale (1-2g al giorno) pu&ograve; essere utile per normalizzarli. <br /> Nel caso in cui la pressione risulti costantemente alterata, si rende necessaria una valutazione specialistica cardiologica allo scopo di deciderne il trattamento.",'icona':'icon-thumbs-down'};
      mapping['1010'] = {'titolo': "Sei sovrappeso e hai la glicemia elevata.",'stato': 'error','messaggio': "La presenza d'iperglicemia a digiuno in un soggetto in sovrappeso pu&ograve; dipendere da un'alimentazione scorretta perch&egrave; troppo ricca di zuccheri. <br /> Una dieta appropriata &egrave; in grado di correggere sia l'eccesso di peso che l'iperglicemia. <br /> E' in ogni caso fondamentale controllare i valori di glicemia anche qualora il peso si fosse normalizzato. <br /> Se l'iperglicemia non si normalizza con la perdita di peso, effettua esami che indaghino il metabolismo degli zuccheri.",'icona':'icon-thumbs-down'};
      mapping['1001'] = {'titolo': "Sei sovrappeso e hai la pressione alta.",'stato': 'error','messaggio': "In un soggetto in sovrappeso, i valori alterati della pressione, specie se incostanti e di entit&agrave; moderata, possono essere legati al sovrappeso, tanto pi&ugrave; quanto questo &egrave; maggiore. <br /> Ti suggeriamo di iniziare con una correzione delle abitudini alimentari, seguendo una dieta non solo ipo-calorica ma anche con poco sale (1-2g al giorno). <br /> Se l'ipertensione &egrave; piu marcata e persistente, &egrave; necessario associare ai provvedimentio dietetici una valutazione cardiologica mirata anche a stabilire un trattamento farmaclogico.",'icona':'icon-thumbs-down'};
      mapping['0101'] = {'titolo': "Hai il colesterolo - trigliceridi e la pressione alti.",'stato': 'error','messaggio': "Colesterolo - trigliceridi elevati e pressione alta rappresentano un fattore di rischio per lo sviluppo di patologie cardio-vascolari e il rischio &egrave; tanto pi&ugrave; consistente tanto &egrave; maggiore l'alterazione dei due parametri. <br /> Anche in assenza di sovrappeso, una dieta ipocalorica e con ridotto apporto di sale (1-2g al giorno) si rende necessaria per correggere queste alterazioni. <br /> Nei casi meno critici, la dieta pu&ograve; risultare risolutiva. <br /> Suggeriamo comunque di sorvegliare colesterolo - trigliceridi con esami del sangue e di tenere sotto controllo la pressione. <br /> Se i valori rimanessero alterati, si rende necessaria una valutazione clinica metabolica e cardiologica.",'icona':'icon-thumbs-down'};
      mapping['1011'] = {'titolo': "Sei sovrappeso, con alterazioni di glicemia e pressione.",'stato': 'error','messaggio': "Spesso la sola correzione delle abitudini alimentari attraverso una dieta (importante il basso contenuto di sale: massimo 1-2g al giorno) &egrave; in grado di normalizzare sia la glicemia che la pressione, in concomitanza con la progressiva perdita di peso. <br /> Nei casi in cui ci&ograve; non si verifichi o nei casi in cui ipertensione e iperglicemia siano pi&ugrave; severe (in presenza spesso di una familiarit&agrave; per tali patologie), si rendono necessari accertamenti clinici sia del metabolismo glucidico che dell'ipertensione, allo scopo anche di individuare un corretto trattamento farmacologico da associare alla dieta. ",'icona':'icon-thumbs-down'};
      mapping['1101'] = {'titolo': "Sei sovrappeso, hai il colesterolo - trigliceridi e pressione elevati.",'stato': 'error','messaggio': "Questi parametri, specie se associati, rappresentano un fattore di rischio per lo sviluppo di complicanze cardio-vascolari. <br /> Se di lieve entit&agrave;, tali valori possono essere corretti con una dieta mirata ad ottenere una progressiva perdita di peso. <br /> Tuttavia, nei casi in cui le alterazioni metaboliche e pressorie siano pi&ugrave; marcate, alla dieta si deve associare, dopo una corretta valutazione metabolica e cardiologica, un trattamento farmacologico.",'icona':'icon-thumbs-down'};

      var foo = new Array();
      var rapporto_colesterolo = 0;

  		//BMI
  		var bmi = dati.peso/[(dati.altezza/100)*(dati.altezza/100)];
  		if(bmi > 25){
  			foo[0] = 1;
  		}else{
  			foo[0] = 0;
  		}

      // colesterolo
      rapporto_colesterolo = dati.cho/dati.hdl;
      if(dati.sesso == 'maschio'){
        if(rapporto_colesterolo > 5 || dati.tg > 200)
         foo[1] = 1;
        else
          foo[1] = 0;
      }else{
        if(rapporto_colesterolo > 4.5 || dati.tg > 200)
          foo[1] = 1;
        else
          foo[1] = 0;
      }

  		//glic
  		if(dati.glic > 120){
  			foo[2] = 1;
  		}else{
  			foo[2] = 0;
  		}

      //pa_max
      if(dati.pa_max > 140 || dati.pa_min > 85){
        foo[3] = 1;
      }else{
        foo[3] = 0;
      }


      //console.log(foo); // debug per il codice

      foobar = foo.join("");

      /*var modalInstance = $modal.open({
      templateUrl: 'MyModal_risulato',
      controller: CruscottoSaluteCtrl,
      resolve: {
        risultato: function () {
          return $scope.risultato;
        }
      }
    });*/

  		$scope.risultato = angular.copy(mapping[foobar]);
   	};

        // Pulisci dati per nuovo inserimento
    $scope.resetta = function() {
      $scope.risultato = '';
    };

  }