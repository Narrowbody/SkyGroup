import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.scss';


const Operations = () => {
    return (
        <div className="container">
            <div className="section">
                <h1 className="container has-text-centered">Areas of Operations</h1>
                <Tabs>
                    <TabList>
                        <Tab><p className="has-text-link">Airlines</p></Tab>
                        <Tab><p className="has-text-link">Helicopter Ops</p></Tab>
                        <Tab>Aerodromes</Tab>
                        <Tab>Ground Handling</Tab>
                        <Tab>MRO's</Tab>
                    </TabList>
                <div className="">
                    <TabPanel>
                            <div className="section">
                                <div className="">
                                <h2>Airline Operations</h2>
                                </div>
                            </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="container">
                            <h2>Helicopter Operations</h2>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="container">
                            <h2>Aerodromes/Airports</h2>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="container">
                            <h2>Ground Handling/Servicing</h2>
                        </div>
                    </TabPanel>
                    
                    <TabPanel>
                        <div className="container">
                            <h2>Maintenance Repair Organizations</h2>
                        </div>                        
                    </TabPanel>
                    </div>    
                </Tabs>
            </div>
        </div>
    );
}

export default Operations;

