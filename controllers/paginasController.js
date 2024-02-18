import { Viaje } from '../models/Viaje.js'

const paginaInicio =  (req, res) =>{ // request lo que enviamos , response lo que express nos responde
    res.render('inicio',{
        pagina: 'Inicio'
    });
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

const paginaTestimoniales = (req, res) =>{ // request lo que enviamos , response lo que express nos responde
    res.render('testimoniales',{
        pagina: 'Testimoniales'
    });
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}