import React from 'react';
import { Routes, Route } from "react-router-dom";

//Layouts
import VerticalLayout from "../Layouts/index";

//routes
import { authProtectedRoutes, publicRoutes } from "./allRoutes";


const Index = () => {
    return (
        <React.Fragment>
                <Routes>
                    <Route>
                    {publicRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={
                                route.component
                            }
                            key={idx}
                            exact={true}
                        />
                    ))}
                </Route>

                <Route>
                    {authProtectedRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={ <VerticalLayout>{route.component}</VerticalLayout> }
                            key={idx}
                            exact={true}
                        />
                    ))}
                </Route>
                </Routes>
        </React.Fragment>
    );
};

export default Index;