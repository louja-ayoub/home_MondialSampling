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
        categorie: 'HAMMER MILLS',
        description: "The hammer mill consists of a series of oscillating hammers and includes \
                    a grill to achieve a and includes a grate to achieve the final product size.\
                    The material is initially reduced in the upper the upper chamber by impact, \
                    it is further reduced by shearing as it passes shear as it passes through the \
                    breaker bar, and finally it is reduced by attrition as the hammers force the \
                     material hammers force the material through the grate.\
                    Adjustable rotation speed\
                    Adjustable breaker\
                    Metal trapping system\
                    Reversible\
                    Different screener models",
        id: 1

    },

    {
        name: 'SCREW CONVEYOR SCR',
        code: 'SCR',
        imageUrl: productImg2,
        categorie: 'Screw Sampler',
        description: "Screw conveyors are used to transport bulk materials in horizontal, vertical, or diagonal directions. With a product specific design, customers receive a total solution that flawlessly connects to your process.\
        The configuration of a screw conveyor depends not only on the type of(bulk) material, but also on aspects such as moisture, temperature, ATEX risk zone as well as the actual process and mechanical requirements.",
        id: 2

    },

    {
        name: 'ROTARY DIVIDER CSA-3500-1S',
        code: 'CSA-3500-1S',
        imageUrl: productImg3,
        description: "The Stand Alone Rotating Sample Divider is designed to split out a representative portion of a sample with a high degree of dividing accuracy\
                The main features include accurate representative split of any proportion(from 2% – 50 %), as well as sealed bearings.\
                The feed sample is fed at a controlled rate as a falling stream that is divided either into one part or into equal segments by the action of a \
                “circle” of segmental buckets being rotated beneath the stream.\
                The unit operates in accordance with internationally recognised sampling protocols.\
                Recommended materials Cement clinker, chemicals, construction materials, fertilizers, grains, metals powders, minerals, nuts, seeds, soils, plastic, ore, e - waste, auto catalysts, urban mining material, coffee, thee, soils, basically every dry powdered material.",
        categorie: 'Rotary Divider',
        id: 3

    },

    {
        name: 'Slurry Samplers',
        code: 'Anstat-20',
        imageUrl: productImg4,
        categorie: 'Slurry Samplers',
        description: "The Thermo Scientific™ AnStat-330 provides composite samples for metallurgical accounting while providing online elemental analysis. Options for additional process functionality, including distribution and pebble screening, make the AnStat-330 a versatile and compact solution that can address multiple needs.",
        id: 4

    },

    {
        name: 'HAMMER Spare Parts',
        code: 'HAMMER',
        imageUrl: productImg5,
        categorie: 'Spare Parts',
        description: "The Mondial Sampling Supplying all spare part for hammer Crusher. Mondial Sampling focus to produce spare parts as per as technical drawing of the parts.Mondial Sampling supplier all original spare parts as well.And \
        do cooperation with well know casting factory!  be sure and supplier our client best quality, long life products, \
        Best delivery time and available sales conditions.",
        id: 5

    },

    {
        name: 'DYNASCALE BELT SCALE MODEL 1014',
        code: 'BELT SCALE MODEL 1014',
        imageUrl: productImg6,
        categorie: 'Belt scales, Weight Material',
        description: "The Dynascale belt scale model 1014 is easy to install, indoors or outdoors, on stationary or mobile belts and is customised to your applications. Its robust construction makes it suitable for the most difficult applications on a wide variety of applications. The Dynascale 1014 belt scale has an OIML certificate according to the EEC directive, class 2, 1 and 0.5.",
        id: 6

    },


    {
        name: 'Drum-Drive/Tails',
        code: 'DRUM DRIVE AND TAILS',
        imageUrl: productImg7,
        categorie: 'Belt scales, Weight Material',
        description: "The INGEPROA ID with UPN profile, provides constant product flow, chassis robustness and minimum maintenance.Drum or counter-drum motor or return. Possibilities of tubes from diameters D160mm. to D600mm. and calibrated shafts up to D250mm. Hot vulcanized by autoclave with different materials on demand; food grade rubber, natural rubber, polyurethane, etc…",
        id: 7

    },

    {
        name: 'Drum-Drive/Tails',
        code: 'Hammermills Screener',
        imageUrl: productImg8,
        categorie: 'Spare Parts',
        description: "Mondial Sampling designs and manufactures screeners for any type of hammer mills and crushers in the international market. We have the necessary machinery to manufacture screening screeners of different diameters and thicknesses, being one of the few companies in Spain to have such machinery.",
        id: 8

    },

    {
        name: 'Backstops and Freewheels',
        code: 'backstops freewheels',
        imageUrl: productImg9, // Replace with the appropriate image URL
        category: 'backstops freewheels',
        description: "Backstops and freewheels for ensuring one-way security and preventing reverse motion. Suitable for all types of reducers. Available in various types and forms. Renowned brands include Stieber, Ringspan, and Tsubaki.",
        id: 14
    },


    {
        name: 'Gear Reducer',
        code: 'gear reducer',
        imageUrl: productImg10,
        category: 'gear reducers',
        description: "Gear reducers with constant and variable speeds, available in different executions. A wide range of power options and sizes to meet various application needs.",
        id: 10
    },

    {
        name: 'Bearing Pedestal',
        code: 'bearing pedestal',
        imageUrl: productImg11,
        category: 'bearing pedestals',
        description: "Bearing pedestal for guiding rollers, available in a wide range of sizes. Options include cast or welded designs, with manufacturing according to model or drawing.",
        id: 11
    },

    {
        name: 'hydraulic cylinders',
        code: 'hydraulic cylinders',
        imageUrl: productImg12,
        categorie: 'hydraulic cylinders',
        description: "Our hydraulic cylinders come in a variety of sizes and stroke lengths to suit your needs. We offer a comprehensive selection of eye bolts and other suspension components, ensuring versatility and adaptability in various applications. These cylinders are available in both single and double-acting configurations. Additionally, they can be equipped with stroke sensors and position indicators for precise monitoring and control.",
        id: 12

    },




]

export default products;