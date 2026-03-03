create schema SAMT3D;
use SAMT3D;

create table statistics(
    id int auto_increment primary key,
    developer_percent float,
    system_engi_percent float
);

create table classes(
    id int auto_increment primary key,
    class_num int,
    isDoorOpen boolean -- isDoorOpen serve per quando la modalità è escape, serve per sapere se la porta si deve aprire o no 
);

create table subjects(
    id int auto_increment primary key,
    name varchar(30),
    class_id int,
    foreign key (class_id ) REFERENCES classes(id) on delete cascade
);

create table descriptions(
    id int auto_increment primary key,
    description text
);

create table posters(
    id int auto_increment primary key,
    class_id int,
    image_url blob,
    description_id int unique,
    foreign key (class_id ) REFERENCES classes(id) on delete cascade,
    foreign key (description_id ) REFERENCES descriptions(id) on delete cascade
);

create table audio(
    id int auto_increment primary key,
    audio binary,
    description_id int unique,
    foreign key (description_id) REFERENCES descriptions(id) on delete cascade
);

create table npcs(
    id int auto_increment primary key,
    class_id int unique,
    description_id int unique,
    foreign key (class_id) REFERENCES classes(id) on delete cascade,
    foreign key (description_id) REFERENCES descriptions(id) on delete cascade
)
