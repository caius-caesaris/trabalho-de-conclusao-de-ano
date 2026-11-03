create table cliente (
  id serial primary key,
  nome varchar(51) not null,
  telefone char(11),
  endereco varchar(50)
);

create table tecnico (
  cpf char(11) primary key not null,
  nome varchar(51) not null,
  data_nascimento date not null,
  data_admissao date default current_date,
  data_demissao date,
  motivo_demissao text
);

create table marca (
  id serial primary key,
  nome varchar(10)
);

create table aparelho (
  id serial primary key,
  nome varchar(10)
);

create table ordem (
  numero serial primary key,
  cliente int not null,
  tecnico char(11) not null,
  marca int not null,
  aparelho int not null,
  modelo varchar(50) not null,
  sintoma text not null,
  defeito text,
  orcamento int,
  data_retirada date default current_date,
  data_entrega date,
  foreign key (cliente) references cliente (id),
  foreign key (tecnico) references tecnico (cpf),
  foreign key (aparelho) references aparelho (id),
  foreign key (marca) references marca (id)
);