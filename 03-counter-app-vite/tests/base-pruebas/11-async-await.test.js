import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => {  
    
    test('getImagen debe de retornar un URL de una imagen', async() => { 

        const url = await getImagen();
                
        expect( typeof url ).toBe( "string" );
    })

    test('getImagen debe de retornar error si no encuentra la imagen', async() => {
        await getImagen()
            .catch( error => {
                expect( error ).toBe( `No se encontro la imagen`)
            })
    });
})