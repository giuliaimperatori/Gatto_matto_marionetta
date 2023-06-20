SUPSI 2022-23  
Corso d’interaction design, CV427.01  
Docenti: A. Gysin, G. Profeta  

Elaborato 1: Marionetta digitale  

# Gatto_matto_marionetta
Autrice: Giulia Imperatori  
[MediaPipe demo-ES6] https://github.com/giuliaimperatori/Gatto_matto_marionetta.git


## Introduzione e tema
Lo scopo di questo progetto è quello di ottenere un personaggio con un carattere originale, generato con un codice Javascript. È possibile interagire con la marionetta attraverso i movimenti della mano e delle dita riconosciuti dalla videocamera.
Seguendo le indicazioni dell’esercizio, ho realizzato il muso di un gatto “matto”, di cui le parti sono state schizzate su carta. Il suo nome è dato dal fatto che i suoi occhi sono diversi, questi gli conferiscono un aspetto inusuale. Inoltre, durante l’interazione con questa marionetta, essa non rispetta le proporzioni di un felino reale, questo ne rafforza il concetto.


## Riferimenti progettuali
Per la realizzazione della mia marionetta, mi sono ispirata a gatti immaginari e particolari, come ad esempio, quelli dei cartoni animati, come mostrato nelle immagini sottostanti. Per quel che riguarda le dimensioni delle varie parti del muso, ho preso spun- to da quelle di un gatto vero, anche se con l’interazi- one queste verranno mutate rendendole surreali.


https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Yawning_cat_portrait_%288423278464%29.jpg/944px-Yawning_cat_portrait_%288423278464%29.jpg?20151225031420
https://www.denofgeek.com/wp-content/uploads/2021/07/Meowth.jpg?resize=768%2C432
https://www.rete-news.it/wp-content/uploads/2020/07/palla.di-neve-simpson-snowball-Nomi-per-gatti-1-800x800.jpg


## Design dell’interfraccia e modalià di interazione
Ho scelto di disegnare su carta le parti del mio personaggio per poi farne la scansione e dopo averle modificate con Photoshop, aggiungerle al codice come immagini, in modo da avere un risultato creativo e non limitarmi all’utilizzo del codice.
L’interazione con la marionetta è possibile grazie al metodo di MediaPipe, che riconosce i punti presenti sulla mano e che ci permette di muoverla a piacimento. Ho deciso di tenere la visione della mano e di non nasconderla con uno sfondo, in modo da mantenere il concetto di marionetta tradizionale. 



## Tecnologia usata
Muovendo pollice e mignolo è possibile aumentare
o diminuire la dimensione della bocca, è possibile mutarne la larghezza e l’altezza in base alla distanza e alla posizione di queste due dita. Il naso è posizionato sul dito medio, mentre sui polpastrelli dell’indice e dell’anulare sono situati i due occhi, riducendo la distanza fra queste due dita, a un numero pari o minore di cinquanta, l’occhio destro si chiude, per la funzione “if”.

      const distPolliceMignoloX = abs(pollice.x - mignolo.x);
			const distPolliceMignoloY = abs(pollice.y - mignolo.y);
			const boccaWidth = distPolliceMignoloX * 2;
			const boccaHeight = distPolliceMignoloY * 2;
			image(bocca, mignolo.x - distPolliceMignoloX, mignolo.y - distPolliceMignoloY, boccaWidth, boccaHeight);
			const distAnulareIndice = dist(anulare.x, anulare.y, indice.x, indice.y);
      
      push()
			if (distAnulareIndice > 100) {
				image(occhiodx, anulare.x-20, anulare.y-20);
			} else {
				image(occhiodxchiuso, anulare.x-20, anulare.y-20)
			}
			pop()
			console.log(distAnulareIndice)


## Target e contesto d’uso
Il target sono le persone interessate a questo tipo di progetto e di tecnologia. Apportando dei migliora menti, potrebbe essere utilizzata nel contesto di at- elier, dove studenti e insegnanti che non conoscono MediaPipe, possono sperimentare e approfondire il tema attraverso un esempio semplice e pratico. Un altro campo di utilizzo potrebbe essere un open day, per mostrare alcuni dei software utilizzati all’interno della scuola e le possibilità che essa offre durante le lezioni di questo tipo.

[<img src="Immagini-video/immagine_01.jpg" width="300" alt="Immagine_01">]()
[<img src="Immagini-video/immagine_02.jpg" width="300" alt="Immagine_02">]()
[<img src="Immagini-video/immagine_03.jpg" width="300" alt="Immagine_03">]()
[<img src="Immagini-video/screencast.mov" width="300" alt="screencast">]()
