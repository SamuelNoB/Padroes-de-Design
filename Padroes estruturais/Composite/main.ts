import { CompositeProduct } from "./CompositeProduct";
import { SimpleProduct } from "./SimpleProduct";

function main() {
    const comboBasico = new CompositeProduct(7, 'Combo de construção básico'); 


    const betoneira = new SimpleProduct(1, 'betoneira', '', new Date(), 220.0, 1 );
    const carrinhoDeMao = new SimpleProduct(2, 'Carrinho de mão', '', new Date(), 100.0, 1 );

    const andaime = new CompositeProduct(3, 'Conjunto de andaime simples');
    const quadro = new SimpleProduct(4, 'Quadro', 'Quadro simples de andaime', new Date(), 9, 1 );
    const barra = new SimpleProduct(5, 'Barra', 'Barra de andaime simples', new Date(), 5, 1 );
    const escada = new SimpleProduct(6, 'Escada', 'Escada para andaime', new Date(), 8, 1 );

    andaime.add(quadro);
    andaime.add(quadro)
    andaime.add(quadro)
    andaime.add(quadro)
    andaime.add(barra);
    andaime.add(escada);
    
    comboBasico.add(betoneira);
    comboBasico.add(carrinhoDeMao);
    comboBasico.add(andaime);
    const total = comboBasico.totalPrice();
    console.log(total);
}
main()