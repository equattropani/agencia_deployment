import { Viaje } from '../models/Viaje.js'
import { Testimonial } from '../models/Testimoniales.js'

const paginaInicio =  async (req, res) =>{ // request lo que enviamos , response lo que express nos responde
    // Consultar 3 viajes del modelo viaje
    
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimonial.findAll({limit: 3}));
    
    try {        
        const resultado = await Promise.all(promiseDB);

        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
    
};

const paginaNosotros =  (req, res) =>{ // request lo que enviamos , response lo que express nos responde
    res.render('nosotros',{
        pagina: 'Nosotros'
    });
};

const paginaViajes =  async (req, res) =>{ // request lo que enviamos , response lo que express nos responde
    // Consultar base de datos
    const viajes = await Viaje.findAll();

  
    res.render('viajes',{
        pagina: 'Próximos Viajes',
        viajes
    });
};

const paginaTestimoniales = async (req, res) =>{ // request lo que enviamos , response lo que express nos responde
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        });    
    } catch (error) {
        console.log(error);
    }
    
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}