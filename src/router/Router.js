import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "../components/HeaderContainer/NavBar/NavBar";
import Home from "../components/BodyContainer/Home/Home";
import ItemListContainer from "../components/BodyContainer/ItemListContainer/ItemListContainer";
import { Cart } from "../components/BodyContainer/Cart/Cart";
import Contact from "../components/BodyContainer/Contact/Contact";
import NotFound from "../components/BodyContainer/NotFound/NotFound";

const Router = () =>{
    return(
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/inicio" component={Home}/>
                <Route path="/catalogo/:categoryId" component={ItemListContainer}/>
                <Route path="/contacto" component={Contact}/>
                <Route path="/carrito" component={Cart}/>
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};
export default Router;