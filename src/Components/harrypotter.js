const database = [
    {
      id: "1",
      personaje: "Harry Potter",
      imagen: "https://www.sewdirect.com/app/uploads/2020/06/19320004001.jpg",
      biografía:
        "Harry James Potter (n. el 31 de julio de 1980), es un mago de sangre mestiza y el único hijo de James y Lily Potter. Es la única persona conocida que ha sobrevivido a la maldición de Avada Kedavra, haciéndolo en dos ocasiones a manos de Lord Voldemort.",
      casa: "Gryffindor",
    },
    {
      id: "2",
      personaje: "Hermione Granger",
      imagen: "https://www.sewdirect.com/app/uploads/2020/06/19320000001.jpg",
      biografía:
        "Hermione Jean Granger (n. 19 de septiembre de 1979) es una bruja hija de muggles. El Sr. y Sra. Granger son dentistas en el mundo muggle. A los once años descubrió su don mágico y fue aceptada en el Colegio Hogwarts de Magia y Hechicería.",
      casa: "Gryffindor",
    },
    {
      id: "3",
      personaje: "Ron Weasley",
      imagen: "https://www.sewdirect.com/app/uploads/2020/06/19320001001.jpg",
      biografía:
        "Ronald Bilius Weasley (n. 1 de marzo de 1980) es un mago sangre pura, el sexto y más joven hijo de Arthur y Molly Weasley. Ron y sus hermanos y hermana vivían en la Madriguera, en las afueras de Ottery St. Catchpole.",
      casa: "Gryffindor",
    },
    {
      id: "4",
      personaje: "Draco Malfoy",
      imagen: "https://www.sewdirect.com/app/uploads/2020/06/19320005001.jpg",
      biografía:
        "Draco Lucius Malfoy Black (n. 5 de junio de 1980) es un mago de sangre pura y el único hijo de Lucius y Narcissa Malfoy. Por ser el hijo de un mortífago, a Draco le enseñaron a creer firmemente en la importancia de la pureza de sangre.",
      casa: "Slytherin"
    },
    {
     id: "5",
      personaje: "Albus Dumbledore",
      imagen: "https://www.sewdirect.com/app/uploads/2020/06/19320003001.jpg",
      biografía:
        "Albus Percival Wulfric Brian Dumbledore (n. Verano de 1881 - fl. 30 de junio de 1997) fue profesor de Transformaciones y más tarde director del Colegio Hogwarts de Magia y Hechicería. Dumbledore era considerado como el mago más poderoso de su época, famoso por derrotar a Gellert Grindelwald, descubrir doce usos de la sangre de dragón, y su trabajo en alquimia con Nicolas Flamel.",
      casa: "Gryffindor"
    },
    {
      id: "6",
      personaje: "Severus Snape",
      imagen: "https://www.sewdirect.com/app/uploads/2020/06/19320002001.jpg",
      biografía:
        "Severus Snape (n. 9 de enero de 1960 - m. 2 de mayo de 1998) fue Maestro de Pociones, profesor de Defensa Contra las Artes Oscuras y director de Hogwarts, era un mago de sangre mestiza, hijo de la bruja Eileen Prince, y del muggle Tobías Snape. Desempeñó un papel esencial en las dos guerras contra Lord Voldemort.",
      casa: "Slytherin"
    },
    {
      id: "7",
      personaje: "Minerva McGonagall",
      imagen: "https://media.entertainmentearth.com/assets/images/b7ab98653ccd44e0bfe8d24edc555784xl.jpg",
      biografía:
        "Madame Minerva McGonagall (n. 4 de octubre) es una bruja escocesa sangre mestiza y una animaga registrada, la única hija del muggle Robert McGonagall y la bruja Isobel Ross. Minerva trabajó en el Ministerio de Magia y luego se convirtió en Jefa de la Casa Gryffindor, profesora de Transformaciones, subdirectora y directora de Hogwarts.",
      casa: "Gryffindor"
    },
     {
      id: "8",
      personaje: "Lord Voldemort",
      imagen: "https://media.dcbservice.com/xlarge/MAY193166.jpg",
      biografía:
        "Tom Marvolo Ryddle (31 de diciembre de 1926 - m. 2 de mayo de 1998), conocido como Lord Voldemort. Fue el mago tenebroso más poderoso de todos los tiempos. Siendo hijo del adinerado muggle Tom Ryddle Sr. y la bruja Merope Gaunt, nació con sangre mestiza y, tras conocer una profecía, se enfocó en dar muerte a Harry Potter.",
      casa: "Slytherin"
    },
    {
      id: "9",
      personaje: "Luna Lovegood",
      imagen: "https://www.redwolf.in/image/catalog/stickers/harry-potter-luna-lovegood-chibi-sticker-india.jpg",
      biografía:
        "Luna Lovegood (n. 13 de febrero de 1981) es una bruja, la única hija de Xenophilius y Pandora Lovegood. Su madre murió accidentalmente mientras experimentaba con hechizos cuando Luna tenía nueve años y fue criada por su padre, editor de la revista El Quisquilloso, en una casa similar a una torre de ajedrez gigantesca cerca del pueblo de Ottery St. Catchpole en Devon.",
      casa: "Ravenclaw"
    },
    {
      id: "10",
      personaje: "Rubeus Hagrid",
      imagen: "https://media.dcbservice.com/xlarge/MAY193163.jpg",
      biografía:
        "Rubeus Hagrid (n. 06 de diciembre de 1928), familiarmente conocido sólo por su apellido Hagrid, es un mago semi gigante, hijo del señor Hagrid y la giganta Fridwulfa y medio hermano del gigante Grawp. Es el guardabosques de Hogwarts y fue profesor de cuidado de criaturas mágicas. Tiene una gran amistad con Dumbledore, a quien admira y es un gran consejero para Harry, Ron y Hermione",
      casa: "Gryffindor"
    },
    {
      id: "11",
      personaje: "Dobby",
      imagen: "https://www.redwolf.in/image/cache/catalog/stickers/dobby-sticker-india-700x700.jpg",
      biografía:
        "Dobby (n. 28 de junio (año desconocido), f. marzo de 1998) fue el Elfo Doméstico de la familia Malfoy hasta su liberación el 24 de junio de 1993. Sus amos fueron magos tenebrosos que lo trataron cruelmente. En 1992 desobedeció a sus amos y trató de advertir a Harry Potter del complot para que la Cámara de los Secretos se volviera a abrir, fue así como se hicieron amigos.",
      casa: "No pertenece a casas en Hogwarts"
    },
    {
      id: "12",
      personaje: "Hedwig",
      imagen: "https://cdn.shopify.com/s/files/1/1815/0105/products/Character_Hedwig.jpeg?v=1571439819",
      biografía:
        "Hedwig (f. 27 de julio de 1997) era la lechuza y compañera mágica de Harry Potter. Fue un regalo por el undécimo cumpleaños de Harry hecho por Rubeus Hagrid en 1991, quien la compró en el Emporio de la Lechuza.",
      casa: "No pertenece a casas en Hogwarts"
    },
  ];

export default database