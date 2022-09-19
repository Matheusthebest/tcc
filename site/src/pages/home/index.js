import './index.scss';
import Cabecario from '../../components/cabeçario';
import Carousel from 'react-multi-carousel';
import OfertasDiarias from '../../components/ofertas diarias';
import Carrossel from '../../components/carrssel';
import 'react-multi-carousel/lib/styles.css';
import CategoriaDestaque from '../../components/CategoriaDestaque';
import CarrosselMarca from '../../components/carrosselMarca'; 

export default function Home(){
    

    return (
        <main className='page-home'>

        <Cabecario/>
            <Carrossel />
            <h1 className='titulo-landing'> Ofertas Diárias</h1>
            <OfertasDiarias/>

            

            <div className='categoriadestaques'>
                                <h1 className='titulo-landing'> Categorias Em destaque</h1>
                <div className='categoria-destaques'>
                    <CategoriaDestaque nome="Acessórios" imagem="./assets/images/imagemrelogio.png"  />
                    <CategoriaDestaque nome="Tenis" imagem="./assets/images/image40.png"/>
                    <CategoriaDestaque nome="Calças" imagem="./assets/images/image 41.png" />
                    <CategoriaDestaque nome="Blusas" imagem="./assets/images/image 1448.png" />
                </div>
            </div>


       
            <h1 className='titulo-landing'> Itens mais procurados</h1>
  
            <OfertasDiarias/>

            <h1 className='titulo-landing'> Melhores Marcas</h1>

        
            <div>
                <CarrosselMarca/>
            </div>
                
            Rodapé
        </main>
    )
}