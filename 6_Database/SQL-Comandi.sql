use samt3d;
show tables;
desc audio;
desc classrooms;
desc descriptions;
desc npcs;
desc posters;
desc statistics;
desc subjects;

select * from audio;
select * from classrooms;
select * from descriptions;
select * from npcs;
select * from posters;
select * from statistics;
select * from subjects;
select * from total_daily_stats;

-- truncate audio;
-- truncate classrooms;
-- truncate descriptions;
-- truncate npcs;
-- truncate posters;
-- truncate statistics;
-- truncate subjects;
-- truncate total_daily_stats;

create view total_daily_stats as 
select
	date(created_at) as stats_date,
	count(*) as total_entries,
	sum(daily_player) as total_players,
	sum(classroom_visited) as total_classrooms_visited,
	round(avg(developer_percent)) as total_developer_percent,
	round(avg(system_engineers_percent)) as total_system_engineers_percent,
	sec_to_time(sum(time_to_sec(visiting_time))) as total_visiting_time
from statistics
group by date(created_at);

insert into classrooms(class_num,isDoorOpen) value (417,true);
insert into classrooms(class_num,isDoorOpen) value (420,true);
insert into classrooms(class_num,isDoorOpen) value (421,true);
insert into classrooms(class_num,isDoorOpen) value (423,true);
insert into classrooms(class_num,isDoorOpen) value (424,true);
insert into classrooms(class_num,isDoorOpen) value (425,true);
insert into classrooms(class_num,isDoorOpen) value (427,true);
insert into classrooms(class_num,isDoorOpen) value (428,true);
insert into classrooms(class_num,isDoorOpen) value (430,true);

insert into subjects(name,class_id) values ('151',9),
('133',9),
('239 Mettere in funzione il server internet',1),
('307 Creare un sito web interattivo con modulo',1),
('226A Implementare in base alle classi (senza ereditarietà)',4),
('226B Implementare in base alle classi (con ereditarietà)',4);

insert into descriptions(description) values ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
('Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
('Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
('Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

insert into posters(class_id,description_id,image_url) values (1,1,'img_1.jpeg'),
(1,4,'img_2.jpeg'),
(2,2,'img_3.jpg'),
(2,3,'img_4.jpg'),
(3,4,'img_1.jpeg'),
(3,2,'img_2.jpeg'),
(4,2,'img_3.jpg'),
(4,4,'img_4.jpg');

-- update posters set image_url = 'img_1.jpeg' where id = 1;
-- update posters set image_url = 'img_2.jpeg' where id = 2;
-- update posters set image_url = 'img_3.jpg' where id = 5;
-- update posters set image_url = 'img_4.jpg' where id = 6;

-- update classrooms set isDoorOpen = 1 where id >= 0;

-- update posters set class_id = 1 where class_id = 3;

insert into npcs(class_id,description_id) values (1,4),
(3,2),
(5,1),
(2,3);

INSERT INTO statistics (developer_percent, system_engineers_percent, daily_player, classroom_visited, visiting_time, subject_id) VALUES 
(45.5, 54.5, 120, 15, '00:15:30', 1),
(30.2, 69.8, 85, 10, '00:10:45', 2),
(25.0, 75.0, 200, 25, '00:22:00', 3);

insert into audio(description_id) values (1),
(2),
(3),
(4);