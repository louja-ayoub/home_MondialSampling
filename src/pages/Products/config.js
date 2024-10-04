import productImg1 from '../../img/products_img/product-1.jpg'
import productImg2 from '../../img/products_img/product-2.jpg'
import productImg3 from '../../img/products_img/product-3.jpg'
import productImg4 from '../../img/products_img/product-4.jpg'
import productImg5 from '../../img/products_img/product-5.jpg'
import productImg6 from '../../img/products_img/product-6.jpg'
import productImg7 from '../../img/products_img/product-7.jpg'
import productImg8 from '../../img/products_img/product-8.jpg'
import productImg9 from '../../img/products_img/product-9.jpg'
import productImg10 from '../../img/products_img/product-10.jpg'
import productImg11 from '../../img/products_img/product-11.jpg'
import productImg12 from '../../img/products_img/product-12.jpg'




const products = [
    {
        name: 'HAMMER MILLS CS31-3SM',
        code: 'CS31-3/SM',
        imageUrl: productImg1,
        category: 'HAMMER MILLS',
        description: {
            en_us: "The hammer mill consists of a series of oscillating hammers and includes a grill to achieve the final product size. The material is initially reduced in the upper chamber by impact, further reduced by shearing as it passes through the breaker bar, and finally reduced by attrition as the hammers force the material through the grate.",
            es_es: "El molino de martillos consiste en una serie de martillos oscilantes e incluye una parrilla para lograr el tamaño final del producto. El material se reduce inicialmente en la cámara superior por impacto, se reduce aún más por cizallamiento al pasar por la barra rompedor y finalmente se reduce por fricción a medida que los martillos fuerzan el material a través de la rejilla.",
            fr_fr: "Le moulin à marteaux se compose d'une série de marteaux oscillants et comprend une grille pour atteindre la taille finale du produit. Le matériau est d'abord réduit dans la chambre supérieure par impact, il est ensuite réduit par cisaillement en passant à travers la barre de rupture, et enfin réduit par attrition à mesure que les marteaux forcent le matériau à travers la grille.",
            de_de: "Der Hammermühle besteht aus einer Reihe von oszillierenden Hämmern und umfasst ein Gitter, um die Endproduktgröße zu erreichen. Das Material wird zunächst in der oberen Kammer durch Aufprall reduziert, weiter durch Scherung, wenn es durch die Brechleiste geführt wird, und schließlich durch Abrieb reduziert, wenn die Hämmer das Material durch das Gitter zwingen."
        },
        id: 1
    },

    {
        name: 'SCREW CONVEYOR SCR',
        code: 'SCR',
        imageUrl: productImg2,
        category: 'Screw Sampler',
        description: {
            en_us: "Screw conveyors are used to transport bulk materials in horizontal, vertical, or diagonal directions. With a product-specific design, customers receive a total solution that flawlessly connects to your process.",
            es_es: "Los transportadores de tornillo se utilizan para transportar materiales a granel en direcciones horizontales, verticales o diagonales. Con un diseño específico del producto, los clientes reciben una solución total que se conecta perfectamente a su proceso.",
            fr_fr: "Les convoyeurs à vis sont utilisés pour transporter des matériaux en vrac dans des directions horizontales, verticales ou diagonales. Avec un design spécifique au produit, les clients reçoivent une solution totale qui se connecte parfaitement à votre processus.",
            de_de: "Schneckenförderer werden verwendet, um Schüttgüter in horizontaler, vertikaler oder diagonaler Richtung zu transportieren. Mit einem produktspezifischen Design erhalten die Kunden eine Gesamtlösung, die nahtlos an Ihren Prozess anschließt."
        },
        id: 2
    },

    {
        name: 'ROTARY DIVIDER CSA-3500-1S',
        code: 'CSA-3500-1S',
        imageUrl: productImg3,
        description: {
            en_us: "The Stand Alone Rotating Sample Divider is designed to split out a representative portion of a sample with a high degree of dividing accuracy.",
            es_es: "El divisor de muestras rotativo autónomo está diseñado para dividir una porción representativa de una muestra con un alto grado de precisión de división.",
            fr_fr: "Le diviseur d'échantillons rotatif autonome est conçu pour séparer une portion représentative d'un échantillon avec un degré élevé de précision de division.",
            de_de: "Der eigenständige rotierende Probenteiler ist so konzipiert, dass er einen repräsentativen Teil einer Probe mit hoher Teilungsgenauigkeit abtrennt."
        },
        category: 'Rotary Divider',
        id: 3
    },

    {
        name: 'Slurry Samplers',
        code: 'Anstat-20',
        imageUrl: productImg4,
        category: 'Slurry Samplers',
        description: {
            en_us: "The Thermo Scientific™ AnStat-330 provides composite samples for metallurgical accounting while providing online elemental analysis.",
            es_es: "El Thermo Scientific™ AnStat-330 proporciona muestras compuestas para la contabilidad metalúrgica mientras proporciona análisis elementales en línea.",
            fr_fr: "Le Thermo Scientific™ AnStat-330 fournit des échantillons composites pour la comptabilité métallurgique tout en fournissant une analyse élémentaire en ligne.",
            de_de: "Das Thermo Scientific™ AnStat-330 liefert zusammengesetzte Proben für die metallurgische Buchhaltung und bietet gleichzeitig eine Online-Elementaranalyse."
        },
        id: 4
    },

    {
        name: 'HAMMER Spare Parts',
        code: 'HAMMER',
        imageUrl: productImg5,
        category: 'Spare Parts',
        description: {
            en_us: "The Mondial Sampling supplies all spare parts for hammer crushers. Mondial Sampling focuses on producing spare parts according to technical drawings and also supplies original spare parts, ensuring quality, durability, and quick delivery.",
            es_es: "Mondial Sampling suministra todas las piezas de repuesto para los molinos de martillos. Mondial Sampling se enfoca en producir repuestos de acuerdo con los planos técnicos y también suministra repuestos originales, asegurando calidad, durabilidad y rápida entrega.",
            fr_fr: "Mondial Sampling fournit toutes les pièces de rechange pour les concasseurs à marteaux. Mondial Sampling se concentre sur la production de pièces de rechange selon des plans techniques et fournit également des pièces de rechange d'origine, garantissant qualité, durabilité et livraison rapide.",
            de_de: "Mondial Sampling liefert alle Ersatzteile für Hammerbrecher. Mondial Sampling konzentriert sich auf die Herstellung von Ersatzteilen nach technischen Zeichnungen und liefert auch Originalersatzteile, die Qualität, Langlebigkeit und schnelle Lieferung gewährleisten."
        },
        id: 5
    },

    {
        name: 'DYNASCALE BELT SCALE MODEL 1014',
        code: 'BELT SCALE MODEL 1014',
        imageUrl: productImg6,
        category: 'Belt scales, Weight Material',
        description: {
            en_us: "The Dynascale belt scale model 1014 is easy to install, indoors or outdoors, on stationary or mobile belts and is customized to your applications.",
            es_es: "El modelo de balanza de cinta Dynascale 1014 es fácil de instalar, en interiores o exteriores, en cintas estacionarias o móviles y está personalizado para sus aplicaciones.",
            fr_fr: "Le modèle de balance à bande Dynascale 1014 est facile à installer, à l'intérieur ou à l'extérieur, sur des bandes fixes ou mobiles et est personnalisé pour vos applications.",
            de_de: "Die Dynascale Bandwaage Modell 1014 ist einfach zu installieren, drinnen oder draußen, auf stationären oder mobilen Bändern und an Ihre Anwendungen angepasst."
        },
        id: 6
    },

    {
        name: 'Drum-Drive/Tails',
        code: 'DRUM DRIVE AND TAILS',
        imageUrl: productImg7,
        category: 'Belt scales, Weight Material',
        description: {
            en_us: "The INGEPROA ID with UPN profile provides constant product flow, chassis robustness, and minimum maintenance. Drum or counter-drum motor or return.",
            es_es: "El INGEPROA ID con perfil UPN proporciona flujo constante de producto, robustez del chasis y mínimo mantenimiento. Tambor o contramotor de tambor o retorno.",
            fr_fr: "L'INGEPROA ID avec profil UPN fournit un flux de produit constant, une robustesse du châssis et un entretien minimal. Tambour ou moteur de contre-tambour ou retour.",
            de_de: "Das INGEPROA ID mit UPN-Profil sorgt für einen konstanten Produktfluss, Chassis-Robustheit und minimalen Wartungsaufwand. Trommel- oder Gegentrommelmotor oder Rücklauf."
        },
        id: 7
    },

    {
        name: 'Drum-Drive/Tails',
        code: 'Hammermills Screener',
        imageUrl: productImg8,
        category: 'Spare Parts',
        description: {
            en_us: "Mondial Sampling designs and manufactures screeners for any type of hammer mills and crushers. We have the necessary machinery to manufacture screeners of different diameters and thicknesses.",
            es_es: "Mondial Sampling diseña y fabrica tamizadores para cualquier tipo de molinos de martillos y trituradoras. Tenemos la maquinaria necesaria para fabricar tamizadores de diferentes diámetros y espesores.",
            fr_fr: "Mondial Sampling conçoit et fabrique des tamis pour tout type de broyeurs à marteaux et concasseurs. Nous disposons des machines nécessaires pour fabriquer des tamis de différents diamètres et épaisseurs.",
            de_de: "Mondial Sampling entwirft und fertigt Siebanlagen für alle Arten von Hammermühlen und Brechern. Wir verfügen über die notwendigen Maschinen, um Siebe mit unterschiedlichen Durchmessern und Stärken herzustellen."
        },
        id: 8
    },

    {
        name: 'Backstops and Freewheels',
        code: 'backstops freewheels',
        imageUrl: productImg9, // Replace with the appropriate image URL
        category: 'backstops freewheels',
        description: {
            en_us: "Backstops and freewheels for ensuring one-way security and preventing reverse motion. Suitable for all types of reducers. Available in various types and forms. Renowned brands include Stieber, Ringspan, and Tsubaki.",
            es_es: "Retenes y ruedas libres para garantizar la seguridad unidireccional y prevenir el movimiento inverso. Adecuado para todo tipo de reductores. Disponible en varios tipos y formas. Marcas reconocidas incluyen Stieber, Ringspan y Tsubaki.",
            fr_fr: "Cale-roues et roues libres pour assurer une sécurité unidirectionnelle et empêcher les mouvements inverses. Convient à tous types de réducteurs. Disponible en plusieurs types et formes. Marques réputées : Stieber, Ringspan et Tsubaki.",
            de_de: "Rücklaufsperren und Freiläufe zur Sicherstellung der Einwegsicherheit und Verhinderung von Rückwärtsbewegungen. Geeignet für alle Arten von Getrieben. Erhältlich in verschiedenen Typen und Formen. Bekannte Marken sind Stieber, Ringspan und Tsubaki."
        },
        id: 9
    },

    {
        name: 'Gear Reducer',
        code: 'gear reducer',
        imageUrl: productImg10,
        category: 'gear reducers',
        description: {
            en_us: "Gear reducers with constant and variable speeds, available in different executions. A wide range of power options and sizes to meet various application needs.",
            es_es: "Reductores de engranajes con velocidades constantes y variables, disponibles en diferentes ejecuciones. Una amplia gama de opciones de potencia y tamaños para satisfacer diversas necesidades de aplicación.",
            fr_fr: "Réducteurs de vitesse à vitesses constantes et variables, disponibles en différentes exécutions. Large gamme d'options de puissance et de tailles pour répondre à différents besoins d'application.",
            de_de: "Getriebeminderer mit konstanten und variablen Geschwindigkeiten, in verschiedenen Ausführungen erhältlich. Eine breite Palette von Leistungsoptionen und Größen, um verschiedene Anwendungsanforderungen zu erfüllen."
        },
        id: 10
    },

    {
        name: 'Bearing Pedestal',
        code: 'bearing pedestal',
        imageUrl: productImg11,
        category: 'bearing pedestals',
        description: {
            en_us: "Bearing pedestal for guiding rollers, available in a wide range of sizes. Options include cast or welded designs, with manufacturing according to model or drawing.",
            es_es: "Pedestal de rodamientos para guiar rodillos, disponible en una amplia gama de tamaños. Las opciones incluyen diseños fundidos o soldados, con fabricación según modelo o dibujo.",
            fr_fr: "Socle de palier pour guider les rouleaux, disponible dans une large gamme de tailles. Options de conception coulée ou soudée, avec fabrication selon modèle ou dessin.",
            de_de: "Lagerbock zur Führung von Walzen, in einer Vielzahl von Größen erhältlich. Optionen umfassen gegossene oder geschweißte Ausführungen, mit Herstellung nach Modell oder Zeichnung."
        },
        id: 11
    },

    {
        name: 'Hydraulic Cylinders',
        code: 'hydraulic cylinders',
        imageUrl: productImg12,
        category: 'hydraulic cylinders',
        description: {
            en_us: "Our hydraulic cylinders come in a variety of sizes and stroke lengths to suit your needs. We offer a comprehensive selection of eye bolts and other suspension components, ensuring versatility and adaptability in various applications. These cylinders are available in both single and double-acting configurations. Additionally, they can be equipped with stroke sensors and position indicators for precise monitoring and control.",
            es_es: "Nuestros cilindros hidráulicos vienen en una variedad de tamaños y longitudes de carrera para satisfacer sus necesidades. Ofrecemos una selección completa de pernos de ojo y otros componentes de suspensión, asegurando versatilidad y adaptabilidad en diversas aplicaciones. Estos cilindros están disponibles en configuraciones de acción simple y doble. Además, pueden equiparse con sensores de carrera e indicadores de posición para un monitoreo y control precisos.",
            fr_fr: "Nos vérins hydrauliques sont disponibles dans une variété de tailles et de longueurs de course pour répondre à vos besoins. Nous offrons une sélection complète de chapes et d'autres composants de suspension, assurant polyvalence et adaptabilité dans diverses applications. Ces vérins sont disponibles en configurations simple et double effet. De plus, ils peuvent être équipés de capteurs de course et d'indicateurs de position pour un contrôle et un suivi précis.",
            de_de: "Unsere Hydraulikzylinder sind in verschiedenen Größen und Hublängen erhältlich, um Ihren Anforderungen gerecht zu werden. Wir bieten eine umfassende Auswahl an Augenschrauben und anderen Aufhängungskomponenten, die Vielseitigkeit und Anpassungsfähigkeit in verschiedenen Anwendungen gewährleisten. Diese Zylinder sind sowohl in einfach- als auch doppeltwirkenden Ausführungen erhältlich. Zusätzlich können sie mit Hubsensoren und Positionsanzeigen für eine präzise Überwachung und Steuerung ausgestattet werden."
        },
        id: 12
    }

    // Continue similarly for other products

];

export default products;

