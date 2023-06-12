import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 05-deses-obj', () => {

    test( 'usContext debe devolver un objeto', () => {
        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        const testPersona = usContext( persona );
        
        console.log(usContext( persona ))
        expect( testPersona ).toEqual( {
            nombreClave: persona.clave,
            anios: persona.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        } )
    })
})