import { NavLink } from 'react-router-dom';
import { Button } from "react-bulma-components"



const Expertise = () => {
    return ( 
        <div>
        <div className="section">
            <div>
                <h1 className="has-text-centered">Our Expertise</h1>
            </div>
        </div>    
        <div className="container">
            <div className="columns">
                
                <div className="column"></div>
                
                <div className="column is-one-quarter card">
                    <div className="card-header-title">
                        <h3 className="has-text-primary">Assessing</h3>
                    </div>
                    <div className="content">
                        <p className="">
                            Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
                            </p>
                    </div>
                    <div className="card-footer">
                        <div className="card-footer-item">
                            <Button to="/admin/expertise" renderAs={ NavLink } className="is-info">Details</Button>
                        </div>
                    </div>    
                </div>
                
                <div className="column"></div>
                
                <div className="column is-one-quarter card">
                    <div className="card-header-title">
                        <h3 className="has-text-primary">Advising</h3>
                    </div>
                    <div className="content">
                        <p className="">
                            Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
                            </p>
                    </div>
                    <div className="card-footer">
                        <div className="card-footer-item">
                            <Button to="/admin/expertise" renderAs={ NavLink } className="is-info">Details</Button>
                        </div>
                    </div>    
                </div>
                
                <div className="column"></div>
                
                <div className="column is-one-quarter card">
                    <div className="card-header-title">
                        <h3 className="has-text-primary">Implementing</h3>
                    </div>
                    <div className="content">
                        <p className="">
                            Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
                            </p>
                    </div>
                    <div className="card-footer">
                        <div className="card-footer-item">
                            <Button to="/admin/expertise" renderAs={ NavLink } className="is-info">Details</Button>
                        </div>
                    </div>    
                </div>
                
                <div className="column"></div>
            </div>
        </div>
</div>
     );
}
 
export default Expertise;