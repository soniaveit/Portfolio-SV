//Función para asignar texto a un elemento de la página HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

asignarTextoElemento('p1-info-pag','Soy Analista de Sistemas - Técnica Superior en Programación,');
asignarTextoElemento('p2-info-pag','Docente de Informática en el nivel secundario y autodidacta.');
asignarTextoElemento('p3-info-pag','Me apasiona la programación. Feliz de estudiar en Alura Latam');

/*Párrafos Sobre Mi*/
var p1, p2, p3, p4, p5, p6, p7, p8
p1="Me gradué como Técnica Superior en Programación y posteriormente como Analista de Sistemas. Mi fascinación por la informática surgió en los años 90, cuando tuve mi primera computadora. Desde el principio, quería ir más allá de las aplicaciones estándar como WordStar, WordPerfect o Lotus123. Anhelaba tener un mayor control sobre la máquina, ser capaz de crear algo innovador, de darle instrucciones a mi manera. No quería limitarme a lo que otros habían definido en unas líneas de código."
p2="Para alcanzar este objetivo, me embarqué en varios cursos, desde Operadora de PC hasta Planillas de Cálculo (primero Lotus123 y luego QuatroPro), Basic, QBasic, DBase, y Clipper. Fue con este último que desarrollé mi primer programa administrativo, modesto pero significativo en mi camino."
p3="Después de un período de estancamiento, un pequeño proyecto para la gestión de un negocio familiar me impulsó a actualizarme en programación, pues me había quedado en los sistemas del MS-DOS mientras que el entorno había evolucionado hacia Windows."
p4="Así comenzó mi era autodidacta. Armada con una biblia de Visual Basic 6, Access y SQL, abracé el desafío, y han pasado más de 20 años desde entonces, con ese espíritu de aprendizaje constante."
p5="Mi aspiración siempre fue convertirme en Analista de Sistemas, y lo conseguí. Hoy en día, fusiono mis dos pasiones: la informática y la enseñanza. Y aquí me encuentro, abrazando un nuevo desafío: el desarrollo web. Siempre buscando más, siempre con sed de conocimiento."
p6="Quiero expresar mi profunda gratitud a Alura-Latam y Oracle por su apoyo continuo en este viaje."
asignarTextoElemento('mi-descripcion-1', p1);
asignarTextoElemento('mi-descripcion-2',p2);
asignarTextoElemento('mi-descripcion-3',p3);
asignarTextoElemento('mi-descripcion-4',p4);
asignarTextoElemento('mi-descripcion-5',p5);
asignarTextoElemento('mi-descripcion-6',p6);

/*Celdas sobre Skills*/
p1= document.getElementById('skills1').innerHTML + " Tengo experiencia en varios lenguajes de programación como Basic, QBasic, Visual Basic 6, y también he trabajado con bases de datos utilizando SQL.";
p2="He desarrollado programas administrativos y sistemas para la gestión de negocios, lo que sugiere habilidades en el diseño y desarrollo de software.";
p3="He demostrado capacidad para aprender de forma autodidacta, actualizándome en nuevas tecnologías y herramientas a lo largo de los años.";
p4="M he graduado como Analista de Sistemas, lo que implica habilidades en el análisis de requerimientos, diseño de sistemas y resolución de problemas.";
p5="Fusiono mis dos pasiones: la informática y la enseñanza, lo que sugiere habilidades en la transmisión de conocimientos y la capacitación de otros.";
p6="Estoy explorando un nuevo desafío en el desarrollo web, lo que indica una disposición para ampliar mis habilidades y adaptarme a nuevas tecnologías.";
asignarTextoElemento('skills1', p1);
asignarTextoElemento('skills2',p2);
asignarTextoElemento('skills3',p3);
asignarTextoElemento('skills4',p4);
asignarTextoElemento('skills5',p5);
asignarTextoElemento('skills6',p6);

/*Celdas sobre Hobbies */
p1="Disfruto de una variedad de actividades en mi tiempo libre, cada una de las cuales me brinda una forma única de relajarme y recargar energías.";
p2="Pasear a mis perros: Nada me llena de más alegría que compartir largos paseos con mis fieles compañeros peludos. Es una oportunidad para conectar con la naturaleza y disfrutar de su compañía.";
p3="Cine: De vez en cuando, me encanta sumergirme en una buena película. Ya sea un clásico del cine o una película reciente, siempre encuentro inspiración y entretenimiento en la gran pantalla.";
p4="Tejer: Aunque el tiempo es escaso, encuentro momentos para disfrutar de la calma y la creatividad que ofrece el tejer. Cada puntada es una expresión de mi pasión por las manualidades y el arte.";
p5="La música es una parte esencial de mi vida. Ya sea escuchando mi lista de reproducción favorita o explorando nuevos géneros, encuentro consuelo y motivación en cada nota.";
p6="Me gusta desafiar mi mente resolviendo ejercicios de matemáticas o crucigramas. Es una forma divertida y estimulante de mantener mi mente aguda y activa.";
p7="Por encima de todo, mi mayor pasión es estar en la costa del mar. Nada se compara con la sensación de libertad y serenidad que experimento mientras contemplo las olas, caminando por la orilla y dejando que el sonido del mar me envuelva.";
p8="Estos son algunos de los pasatiempos que me inspiran y enriquecen mi vida, añadiendo un equilibrio perfecto a mis actividades profesionales.";

asignarTextoElemento('txt-hobbies-1', p1);
asignarTextoElemento('txt-hobbies-2',p2);
asignarTextoElemento('txt-hobbies-3',p3);
asignarTextoElemento('txt-hobbies-4',p4);
asignarTextoElemento('txt-hobbies-5',p5);
asignarTextoElemento('txt-hobbies-6',p6);
asignarTextoElemento('txt-hobbies-7',p7);
asignarTextoElemento('txt-hobbies-8',p8);