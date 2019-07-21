select * from d04_local2_m

update d04_local2_m set d04_cdempresa = 1, d04_cdlocal1 = 1, d04_nmlocal2 = '-' where d04_cdlocal2 = 1

select * from d04_local2_m where d04_cdlocal1 = 1


CREATE TABLE d04_local2_m(
	d04_cdempresa BIGINT, 
	d04_cdlocal1 BIGINT,
	d04_cdlocal2 BIGSERIAL,
	d04_nmlocal2 VARCHAR(200),

PRIMARY KEY(d04_cdlocal2),
CONSTRAINT local1_fk FOREIGN KEY (d04_cdlocal1) REFERENCES d03_local1_m(d03_cdlocal1),
CONSTRAINT local1_empresa_fk FOREIGN KEY (d04_cdempresa) REFERENCES d24_empresa(d24_cdempresa)
);


CREATE TABLE d03_local1_m(
	d03_cdlocal1 BIGSERIAL,
	d03_cdempresa BIGINT,
	d03_nmlocal1 VARCHAR(200),

PRIMARY KEY(d03_cdlocal1),
CONSTRAINT empresa_fk FOREIGN KEY (d03_cdempresa) REFERENCES d24_empresa(d24_cdempresa)
);

INSERT INTO d03_local1_m ( d03_cdempresa, d03_cdlocal1,d03_nmlocal1)   VALUES ('1','1','Sítio em operações de derruba');
INSERT INTO d03_local1_m ( d03_cdempresa, d03_cdlocal1,d03_nmlocal1)   VALUES ('1','2','Sítio em operações de arraste');
INSERT INTO d03_local1_m ( d03_cdempresa, d03_cdlocal1,d03_nmlocal1)   VALUES ('1','3','Pátios');
INSERT INTO d03_local1_m ( d03_cdempresa, d03_cdlocal1,d03_nmlocal1)   VALUES ('1','4','Pátio transportado');
INSERT INTO d03_local1_m ( d03_cdempresa, d03_cdlocal1,d03_nmlocal1)   VALUES ('1','5','Infra-estrutura');
INSERT INTO d03_local1_m ( d03_cdempresa, d03_cdlocal1,d03_nmlocal1)   VALUES ('1','6','Parcelas de monitoramento e de silvicultura pós-colheita');
INSERT INTO d03_local1_m ( d03_cdempresa, d03_cdlocal1,d03_nmlocal1)   VALUES ('1','7','Acampamento');
INSERT INTO d03_local1_m ( d03_cdempresa, d03_cdlocal1,d03_nmlocal1)   VALUES ('1','8','Escritório ');
INSERT INTO d03_local1_m ( d03_cdempresa, d03_cdlocal1,d03_nmlocal1) VALUES ('1','9','Entornos UMF');




INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','1','Em todos os locais');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','1','Picadas do inventário');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','1','Local da derruba');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','2','Em todos os locais');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','2','Trilhas de arraste');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','3','Em todos os locais');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','3','Todo o pátio');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','3','Bordas do pátio');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','3','Saída do pátio');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','4','Em todos os locais');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','4','Todo o pátio');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','5','Em todos os locais');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','5','Estradas principais e de acesso');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','5','Estradas secundárias');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','5','Toda malha viária');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','6','Em todos os locais');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','6','Parcela');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','6','Geral');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','7','Em todos os locais');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','7','Geral');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','7','Alojamento');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','8','Em todos os locais');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','8','Geral');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','8','PMFS/POA');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','9','Em todos os locais');
INSERT INTO d04_local2_m ( d04_cdempresa, d04_cdlocal1, d04_nmlocal2)   VALUES ('1','9','Geral');



select * from d05_local3_m


INSERT INTO d05_local3_m (d05_cdempresa, d05_cdlocal1, d05_cdlocal2, d05_nmlocal3) values (1,1,1,'teste banco');
);


INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','1','Em todos os sublocais');


INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','1','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','1','Árvores inventariadas (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','1','Árvores inventariadas (fuste)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','1','Árvores inventariadas (circunferência)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','1','Árvores inventariadas (altura)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','1','Árvores inventariadas (espécies comuns)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','1','Árvores inventariadas (demais espécies)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','1','Árvores inventariadas (plaquetas)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','1','Distância entre picadas');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','1','Distância nas picadas');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','1','Numeração das picadas');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','1','Direção das picadas');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','1','Microzoneamento UTs');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Equipe (EPIs)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Equipe (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Equipe (uso de mapas)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Procedimentos (caminhos de fuga)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Procedimentos (técnica de corte)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Procedimentos (segurança)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Procedimentos (corte de cipós)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Toco (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Árvore a explorar (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Equipamentos ');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Árvore explorada (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','2','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','2','1','Árvore explorada (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','2','1','Leito da trilha (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','2','1','Planejamento (trilha)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','2','1','Planejamento (arraste)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','2','1','Equipe (EPIs)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','2','1','Equipe (uso de mapas)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','2','1','Equipamentos');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','1','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','1','Leito (dimensões)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','1','Árvore explorada');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','1','Equipe (EPIs)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','1','Equipamentos');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','2','Leito (margens)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','3','Procedimentos (romaneio)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','3','Procedimentos (transporte)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','3','Procedimentos (ATPF)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','4','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','4','1','Árvore explorada');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','4','1','Leito (resíduos)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','1','Leito (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','1','Leito (margens)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','2','Leito (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','2','Leito (margens)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','3','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','3','Delimitação UPA');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','3','Delimitação UMF');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','3','Bueiros');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','3','Pontes');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','3','Valetas');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','1','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','1','Estabelecimento');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','1','Dados');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','2','Fitossociologia');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','2','Ecologia florestal');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','2','Cobertura florestal');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','2','Rendimento florestal');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','2','Análise de danos');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','2','Economia');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','2','Política/legislação');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','2','Organização');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','2','Departamento pessoal');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','1','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','1','Treinamentos ');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','1','Procedimentos (invasão)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','1','Equipe (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','1','Procedimentos (combustíveis)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','1','Procedimentos (segurança)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','1','Equipamentos');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','2','Localização');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','2','Dormitórios');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','2','Refeitórios');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','2','Cozinha');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','2','Sanitários');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','2','Procedimentos (lixo e resíduos)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','2','Equipamentos');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','1','Organização/Planejamento');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','1','Economia');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','1','Política/legislação');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','2','Mapas (UPA)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','2','Mapas (UT)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','2','Mapas (infra-estrutura)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','2','Mapas (árvores)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','2','Mapas (zoneamemto)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','2','Mapas (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','2','Procedimentos (silvicultura)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','2','Listagens ');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','9','0','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','9','1','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','9','1','Organização');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','9','1','Infra-estrutura ');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','9','1','Mão-de-obra e qualificação');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','9','1','Política/legislação');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','9','1','Saúde pública');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','9','1','Economia');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','9','1','Empresas locais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3) VALUES ('1','9','1','Ecologia regional');




-- Local 3

CREATE TABLE d05_local3_m(
	d05_cdempresa BIGINT,
	d05_cdlocal1 BIGINT,
	d05_cdlocal2 BIGINT,
	d05_cdlocal3 BIGSERIAL,
	d05_nmlocal3 VARCHAR(200),

PRIMARY KEY (d05_cdlocal3),
CONSTRAINT local1_fk FOREIGN KEY (d05_cdlocal1) REFERENCES d03_local1_m(d03_cdlocal1),
CONSTRAINT local3_empresa_fk FOREIGN KEY (d05_cdempresa) REFERENCES d24_empresa(d24_cdempresa),
CONSTRAINT local2_fk FOREIGN KEY (d05_cdlocal2) REFERENCES d04_local2_m(d04_cdlocal2)
);



--
--select * from d05_local3_m where d05_cdlocal1 = 3 and d05_cdlocal2 = 6



INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','1','Em todos os sublocais');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Árvores inventariadas (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Árvores inventariadas (fuste)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Árvores inventariadas (circunferência)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Árvores inventariadas (altura)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Árvores inventariadas (espécies comuns)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Árvores inventariadas (demais espécies)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Árvores inventariadas (plaquetas)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Distância entre picadas');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Distância nas picadas');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Numeração das picadas');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Direção das picadas');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','2','Microzoneamento UTs');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','3','Equipe (EPIs)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','3','Equipe (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','3','Equipe (uso de mapas)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','3','Procedimentos (caminhos de fuga)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','3','Procedimentos (técnica de corte)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','3','Procedimentos (segurança)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','3','Procedimentos (corte de cipós)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','3','Toco (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','3','Árvore a explorar (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','3','Equipamentos ');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','1','3','Árvore explorada (geral)');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','2','4','Em todos os sublocais');


INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','2','5','Árvore explorada (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','2','5','Leito da trilha (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','2','5','Planejamento (trilha)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','2','5','Planejamento (arraste)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','2','5','Equipe (EPIs)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','2','5','Equipe (uso de mapas)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','2','5','Equipamentos');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','6','Em todos os sublocais');



INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','7','Leito (dimensões)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','7','Árvore explorada');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','7','Equipe (EPIs)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','7','Equipamentos');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','8','Leito (margens)');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','9','Procedimentos (romaneio)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','9','Procedimentos (transporte)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','3','9','Procedimentos (ATPF)');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','4','10','Em todos os sublocais');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','4','11','Árvore explorada');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','4','11','Leito (resíduos)');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','12','Em todos os sublocais');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','13','Leito (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','13','Leito (margens)');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','14','Leito (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','14','Leito (margens)');


INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','15','Em todos os sublocais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','15','Delimitação UPA');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','15','Delimitação UMF');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','15','Bueiros');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','15','Pontes');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','5','15','Valetas');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','16','Em todos os sublocais');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','17','Estabelecimento');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','17','Dados');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','18','Fitossociologia');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','18','Ecologia florestal');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','18','Cobertura florestal');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','18','Rendimento florestal');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','18','Análise de danos');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','18','Economia');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','18','Política/legislação');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','18','Organização');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','6','18','Departamento pessoal');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','19','Em todos os sublocais');


INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','20','Treinamentos ');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','20','Procedimentos (invasão)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','20','Equipe (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','20','Procedimentos (combustíveis)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','20','Procedimentos (segurança)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','20','Equipamentos');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','21','Localização');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','21','Dormitórios');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','21','Refeitórios');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','21','Cozinha');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','21','Sanitários');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','21','Procedimentos (lixo e resíduos)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','7','21','Equipamentos');



INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','22','Em todos os sublocais');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','23','Organização/Planejamento');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','23','Economia');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','23','Política/legislação');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','24','Mapas (UPA)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','24','Mapas (UT)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','24','Mapas (infra-estrutura)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','24','Mapas (árvores)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','24','Mapas (zoneamemto)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','24','Mapas (geral)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','24','Procedimentos (silvicultura)');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','8','24','Listagens ');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','9','25','Em todos os sublocais');

INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','9','26','Organização');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','9','26','Infra-estrutura ');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','9','26','Mão-de-obra e qualificação');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','9','26','Política/legislação');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','9','26','Saúde pública');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','9','26','Economia');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','9','26','Empresas locais');
INSERT INTO d05_local3_m ( d05_cdempresa, d05_cdlocal1, d05_cdlocal2,  d05_nmlocal3)   VALUES ('1','9','26','Ecologia regional');



34,35,36,37,38
update d05_local3_m set d05_cdlocal2 = 11 where d05_cdlocal3 in (50,51)



-- Nivel 1
CREATE TABLE d10_nivel1_m(
	d10_cdnivel1 BIGSERIAL,
	d10_cdempresa BIGINT,
	d10_nmnivel1 VARCHAR(200),

PRIMARY KEY(d10_cdnivel1),
CONSTRAINT empresa_fk FOREIGN KEY (d10_cdempresa) REFERENCES d24_empresa(d24_cdempresa)
);

INSERT INTO d10_nivel1_m ( d10_cdempresa, d10_cdnivel1, d10_nmnivel1)   VALUES ('1','1','Somente Etapa / Item / Subitem');
INSERT INTO d10_nivel1_m ( d10_cdempresa, d10_cdnivel1, d10_nmnivel1)   VALUES ('1','2','Somente Item / Subitem');
INSERT INTO d10_nivel1_m ( d10_cdempresa, d10_cdnivel1, d10_nmnivel1)   VALUES ('1','3','A situação fora da UMF e as providências para  sua proteção');
INSERT INTO d10_nivel1_m ( d10_cdempresa, d10_cdnivel1, d10_nmnivel1)   VALUES ('1','4','Providências internas para o funcionamento da empresa');
INSERT INTO d10_nivel1_m ( d10_cdempresa, d10_cdnivel1, d10_nmnivel1)   VALUES ('1','5','Sobre a realização das operações florestais');
INSERT INTO d10_nivel1_m ( d10_cdempresa, d10_cdnivel1, d10_nmnivel1)   VALUES ('1','6','As atividades empresarias têm os impactos desejados (são eficientes)');


-- Nivel 2

CREATE TABLE d11_nivel2_m(
	d11_cdempresa BIGINT,
	d11_cdnivel1 BIGINT,
	d11_cdnivel2 BIGSERIAL,
	d11_nmnivel2 VARCHAR(200),


PRIMARY KEY (d11_cdnivel2),
CONSTRAINT nivel1_empresa_fk FOREIGN KEY (d11_cdempresa) REFERENCES d24_empresa(d24_cdempresa),
CONSTRAINT nivel1_fk FOREIGN KEY (d11_cdnivel1) REFERENCES d10_nivel1_m(d10_cdnivel1)

);

INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1,  d11_nmnivel2)   VALUES ('1','1','PRÉ EXPLORATÓRIA');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1,  d11_nmnivel2)   VALUES ('1','1','EXPLORATÓRIA');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1,  d11_nmnivel2)   VALUES ('1','1','PERMANENTE E PÓS EXPLORATÓRIA');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1,  d11_nmnivel2)   VALUES ('1','2','-');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1,  d11_nmnivel2)   VALUES ('1','3','As condições amplamente fora d');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1,  d11_nmnivel2)   VALUES ('1','3','A UMF está efetivamente proteg');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1,  d11_nmnivel2)   VALUES ('1','4','Organização das atividades emp');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1,  d11_nmnivel2)   VALUES ('1','4','Providências Técnicas para um ');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1,  d11_nmnivel2)   VALUES ('1','5','Preparação da infra-estrutura ');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1,  d11_nmnivel2)   VALUES ('1','5','Exploração e tratamento silvic');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1,  d11_nmnivel2)   VALUES ('1','6','O funcionamento do ecossistema');
INSERT INTO d11_nivel2_m ( d11_cdempresa, d11_cdnivel1,  d11_nmnivel2)   VALUES ('1','6','Os resultados sócio-econômicos');

-- Nivel 3

CREATE TABLE d12_nivel3_m(
	d12_cdempresa BIGINT,
	d12_cdnivel1 BIGINT,
	d12_cdnivel2 BIGINT,
	d12_cdnivel3 BIGSERIAL,
	d12_nmnivel3 VARCHAR(200),

	
PRIMARY KEY (d12_cdnivel3),
CONSTRAINT nivel1_empresa_fk FOREIGN KEY (d12_cdempresa) REFERENCES d24_empresa(d24_cdempresa),
CONSTRAINT nivel1_fk FOREIGN KEY (d12_cdnivel1) REFERENCES d10_nivel1_m(d10_cdnivel1),
CONSTRAINT nivel2_fk FOREIGN KEY (d12_cdnivel2) REFERENCES d11_nivel2_m(d11_cdnivel2)

);

INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','1','1','Macrozoneamento');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','1','1','Delimitação e identificação da');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','1','1','Inventário florestal 100%');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','1','1','Corte de cipós');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','1','1','Instalação da Infra estrutura');

INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','1','2','Derruba');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','1','2','Arraste');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','1','2','Operações de pátio');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','1','2','Transporte');

INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','1','3','Silvicultura pós exploratória ');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','1','3','Proteção florestal');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','1','3','Segurança no trabalho');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','1','3','Infra-estrutura do acampamento');

INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','2','4','Macrozoneamento');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','2','4','Delimitação e identificação da');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','2','4','Inventário florestal 100%');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','2','4','Corte de cipós');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','2','4','Instalação da Infra estrutura');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','2','4','Derruba');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','2','4','Arraste');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','2','4','Operações de pátio');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','2','4','Transporte');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','2','4','Silvicultura pós exploratória ');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','2','4','Proteção florestal');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','2','4','Segurança no trabalho');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','2','4','Infra-estrutura do acampamento');



INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','3','5','A situação dos vizinhos contri');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','3','5','Providências da empresa para a');

INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','3','6','A política e o comportamento d');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','3','6','O setor madeireiro è bem organ');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','3','6','As condições da vida e o bem e');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','3','6','As condições ambientais afetad');

INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','4','7','Gerenciamento');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','4','7','Condições de trabalho.');



INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','4','8','Segurança');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','4','8','Qualificação e equipamento');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','4','8','Controle e planejamento');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','4','8','Qualidade dos documentos');

INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','5','9','O zoneamento e a delimitação d');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','5','9','Infraestrutura permanente');

INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','5','10','Identificação e preparação das');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','5','10','A exploração e os tratamentos ');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','6','11','Lista dos resultados ambientai');
INSERT INTO d12_nivel3_m ( d12_cdempresa, d12_cdnivel1, d12_cdnivel2  ,d12_nmnivel3)    VALUES ('1','6','12','Lista dos resultados socioecon');


select * from d12_nivel3_m where d12_cdnivel1 = 3 and d12_cdnivel2 = 6


-- Nivel 4

CREATE TABLE d13_nivel4_m(
	d13_cdempresa BIGINT,
	d13_cdnivel1 BIGINT,
	d13_cdnivel2 BIGINT,
	d13_cdnivel3 BIGINT,
	d13_cdnivel4 BIGSERIAL,
	d13_nmnivel4 VARCHAR(200),

	
PRIMARY KEY (d13_cdnivel4),
CONSTRAINT nivel1_empresa_fk FOREIGN KEY (d13_cdempresa) REFERENCES d24_empresa(d24_cdempresa),
CONSTRAINT nivel1_fk FOREIGN KEY (d13_cdnivel1) REFERENCES d10_nivel1_m(d10_cdnivel1),
CONSTRAINT nivel2_fk FOREIGN KEY (d13_cdnivel2) REFERENCES d11_nivel2_m(d11_cdnivel2),
CONSTRAINT nivel3_fk FOREIGN KEY (d13_cdnivel3) REFERENCES d12_nivel3_m(d12_cdnivel3)

);

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','1','1','Conteúdo do mapa da propriedade');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','1','1','As informações do macrozoneamento correspondem à realidade de campo');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','1','2','UMF');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','1','2','UPA');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','1','3','Picadas de orientação');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','1','3','Informações levantadas');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','1','3','Etiquetagem');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','1','3','Mapa do microzoneamento');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','1','4','Corte pré-exploratório');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','1','5','Estradas principais e de acesso');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','1','5','Estradas secundárias');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','1','5','Pátios');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','1','5','Bueiros/Pontes');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','1','5','Detalhes gerais da construção');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','1','5','Danos e resíduos');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','1','5','Infra-estrutura nos mapas');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','2','6','Mapa de corte');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','2','6','Planejamento');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','2','6','Técnica');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','2','6','Etiquetagem');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','2','6','Legalidade');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','2','7','Planejamento de arraste');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','2','7','Operações');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','2','7','Qualidade');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','2','8','Desperdício');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','2','8','Romaneio');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','2','8','Legalidade ');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','2','9','Segurança');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','2','9','Legalidade');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','3','10','Silvicultura pós-colheita');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','3','10','Monitoramento da floresta e da UMF');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','3','11','Incêndios');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','3','11','Invasão');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','3','11','Caça');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','3','11','Lixo inorgânico');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','3','12','Equipamento de Proteção Individual');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','3','12','Procedimentos');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','3','12','Providências gerais');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','3','12','Sinalização');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','3','13','Localização');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','3','13','Moradia');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','3','13','Higiene');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','1','3','13','Lixo e resíduos');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','14','Conteúdo do mapa da propriedade');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','14','As informações do macrozoneamento correspondem à realidade de campo');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','15','UMF');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','15','UPA');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','16','Picadas de orientação');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','16','Informações levantadas');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','16','Etiquetagem');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','16','Mapa do microzoneamento');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','17','Corte pré-exploratório');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','18','Estradas principais e de acesso');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','18','Estradas secundárias');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','18','Pátios');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','18','Bueiros/Pontes');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','18','Detalhes gerais da construção');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','18','Danos e resíduos');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','18','Infra-estrutura nos mapas');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','19','Mapa de corte');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','19','Planejamento');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','19','Técnica');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','19','Etiquetagem');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','19','Legalidade');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','20','Planejamento de arraste');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','20','Operações');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','20','Qualidade');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','21','Desperdício');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','21','Romaneio');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','21','Legalidade ');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','22','Segurança');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','22','Legalidade');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','23','Silvicultura pós-colheita');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','23','Monitoramento da floresta e da UMF');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','24','Incêndios');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','24','Invasão');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','24','Caça');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','24','Lixo inorgânico');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','25','Equipamento de Proteção Individual');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','25','Procedimentos');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','25','Providências gerais');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','25','Sinalização');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','26','Localização');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','26','Moradia');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','26','Higiene');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','2','4','26','Lixo e resíduos');


INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','4','27','A legislação ambiental e fundiária favorece o manejo florestal sustentável.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','4','27','A política financeira favorece o manejo florestal sustentável.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','4','27','O gerenciamento regional considera adequadamente as demandas da população local e os recursos naturais existentes.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','4','27','A estrutura legal protege o acesso à floresta e aos recursos florestais.');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','4','28','Não há ilegalidade no setor madeireiro.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','4','28','Os mercados da região funcionam.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','4','28','As empresas colaboram entre si.');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','4','29','A situação no setor de saúde é boa.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','4','29','O setor de educação e a situação de apoio técnico no município são satisfatórios');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','4','29','A infraestrutura no município é satisfatória.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','4','29','A população local se sente bom e segura, e deseja ficar.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','4','29','Sem descrição');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','4','29','Têm alimentação suficiente de boa qualidade.');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','4','30','Existe um equilíbrio reconhecido entre as atividades humanas e o meio ambiente.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','4','30','A população local está conciente sobre a importância de manter florestas para o bem estar.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','4','30','Os valores dos recursos naturais estão mantidos.');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','5','31','Os vizinhos vivem em condições satisfatóras.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','5','31','Os vizinhos reconhecem a importância das florestas.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','5','31','Os vizinhos moram em harmonia.');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','5','32','A empresa respeita os direitos dos seus vizinhos e vice verça.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','5','32','A empresa contribui para consolidar e melhorar as condições de vida dos vizinhos.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','5','32','O fogo não constitui um risco à UMF.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','5','32','Procedimentos físicos para proteger a UMF.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','3','5','32','A empresa diminui a contaminação da UMF com lixo e produtos químicos.');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','6','33','Organização operacional.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','6','33','Comunicação e informação.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','6','33','As instalações do acampamento florestal são adequadas.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','6','33','A saúde dos funcionários é boa.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','6','33','O nível de educação dos trabalhadores é adequado.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','6','33','Politica pessoal.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','6','33','O clima de trabalho é boa.');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','7','34','Treinamento de segurança.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','7','34','Equipamentos de proteção individual (EPI).');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','7','34','A empresa implementa procedimentos para assegurar a segurança e a saúde dos trabalhadores florestais.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','7','34','Trabalhadores e gerentes recebem treinamento e capacitação adequados para implantar o manejo.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','7','34','Os funcionários dispõem de todos os equipamentos necessários para o trabalho durante todas as fases do manejo');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','7','35','Monitoramento do desenvolvimento da floresta (crescimento, composição e regeneração).');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','7','35','Monitoramento da Produção');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','7','35','Controle dos Custos');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','7','35','Controle de cadeia de produção.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','7','35','A empresa identifica problemas a serem resolvidos através de pesquisa para subsidiar o PMFS.');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','7','36','Os planos, normas e banco de dados da empresa são atualizados corretamente.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','7','36','Listagens');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','4','7','36','Os diferentes mapas são atualizados anualmente e refletem as mudanças ocorridas no período, têm escala apropriada, clareza de informação, em número suficiente.');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','5','8','37','Macrozoneamento');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','5','8','37','Microzoneamento');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','5','8','37','Delimitação das Uts.');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','5','8','38','O planejamento da construção de estradas e pátios é feito de forma adequada.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','5','8','38','Construção das estradas e pátios');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','5','8','38','A qualidade das estradas principais e secundárias é mantida.');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','5','9','39','Inventário 100%');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','5','9','39','O corte de cipós é realizado de forma adequada.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','5','9','39','Seleção das árvores para corte');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','5','9','39','Marcação das árvores');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','5','9','40','O corte é realizado de forma adequada.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','5','9','40','O planejamento de arraste reflete a tentativa de minimizar os danos às árvores remanescentes e facilitar o deslocamento do trator.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','5','9','40','As operações de arraste são realizadas de forma adequada.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','5','9','40','As operações no pátio são realizadas de forma adequada.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','5','9','40','O tratamento silvicultural das florestas exploradas são adequadas.');

INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','6','10','41','Fragmentação');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','6','10','41','Baixo dano à floresta remanescente.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','6','10','41','Biodiversidade');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','6','10','41','Regeneração e crecimento.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','6','10','41','Água e erosão.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','6','11','41','Quantidade e qualidade de produção');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','6','11','41','Custos e benefícios.');
INSERT INTO d13_nivel4_m ( d13_cdempresa, d13_cdnivel1, d13_cdnivel2, d13_cdnivel3, d13_nmnivel4)   VALUES ('1','6','11','41','Acidentes (Saúde).');

select * from d13_nivel4_m  
select * from d12_nivel3_m  
select * from d11_nivel2_m




