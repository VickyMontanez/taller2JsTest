import { notas } from "../../../version/v1/notas"

describe("test del archivo notas.js", () => {
    const app= notas(2,3,5)
    test('la funcion notas cuando se pierde el promedio(Estudie)', () => {
        expect(app ).toBe("Estudie")
    })
    test('la funcion notas cuando se pasa el promedio(Becado)', () => {
        const app= notas(5,3,5)
        expect(app ).toBe("Becado")
    })
})