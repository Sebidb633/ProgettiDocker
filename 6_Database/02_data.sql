use samt3d;
insert into samt3d.classrooms(class_num,isDoorOpen) values (417,true),
(420,true),
(421,true),
(423,true),
(424,true),
(425,true),
(427,true),
(428,true),
(430,true);

insert into samt3d.subjects(name,class_id) values ('151',9),
('133',9),
('239 Mettere in funzione il server internet',1),
('307 Creare un sito web interattivo con modulo',1),
('226A Implementare in base alle classi (senza ereditarietà)',4),
('226B Implementare in base alle classi (con ereditarietà)',4);

insert into samt3d.descriptions(description) values ("Ciao a tutti! Allora, oggi parliamo di Python. Scommetto che ne avete sentito parlare, ma cos'è esattamente?
Immaginate di voler dare delle istruzioni a un computer, ma di non voler imparare un linguaggio complicato e pieno di simboli strani. Ecco, Python è proprio questo: un modo semplice e intuitivo per parlare con la macchina. È nato negli anni '90 e la sua filosofia principale è la leggibilità. Questo significa che il codice in Python è molto pulito, quasi come leggere una frase in inglese.
Perché è così popolare? Beh, per tre motivi fondamentali. Primo, è facile da imparare, ideale per chi inizia. Secondo, è versatilissimo: ci potete fare dai siti web all'intelligenza artificiale, passando per l'automazione di compiti noiosi. E terzo, c'è una comunità enorme dietro, il che significa tantissime risorse, tutorial e librerie gratuite per fare praticamente qualsiasi cosa vi venga in mente.
In sostanza, Python è come un interprete che traduce le vostre idee in un linguaggio che il computer capisce, ma lo fa con una chiarezza sorprendente. È un ottimo punto di partenza per chiunque voglia avvicinarsi al mondo della programmazione."),
('Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
('Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
('Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

insert into samt3d.posters(class_id,description_id,image_url) values (1,1,'img_1.jpeg'),
(1,2,'img_2.jpeg'),
(1,3,'img_3.jpg'),
(1,4,'img_4.jpg'),
(2,4,'img_1.jpeg'),
(2,3,'img_2.jpeg'),
(3,4,'img_3.jpeg'),
(3,2,'img_4.jpeg'),
(4,2,'img_1.jpg'),
(4,4,'img_2.jpg');

insert into samt3d.npcs(class_id,description_id) values (1,4),
(3,2),
(5,1),
(2,3);

INSERT INTO samt3d.statistics (developer_percent, system_engineers_percent, daily_player, classroom_visited, visiting_time, subject_id) VALUES 
(45.5, 54.5, 120, 15, '00:15:30', 1),
(30.2, 69.8, 85, 10, '00:10:45', 2),
(25.0, 75.0, 200, 25, '00:22:00', 3);

insert into quizzes(question,answer,class_id) values ('Che linguaggi servono per creare una pagina Web?','HTML,CSS,JavaScript',1),
('In che componente del PC si trova la CPU?','Motherboard',2),
('Che oggetto rappresenta meglio un ciclo while true?','While',3),
('Che oggetto è rappresentato nel logo di Java?','JavaCup',4);

insert into samt3d.audio(description_id, audio_url) values (1,'audio_1.mp3'),
(2,'audio_2.mp3'),
(3,'audio_3.mp3'),
(4,'audio_4.mp3');