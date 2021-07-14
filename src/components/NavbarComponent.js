import React, { Component } from 'react'


 class NavbarComponent extends Component {

        constructor(props) {
            super(props)

            this.state = {

            }
        }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md  navbar-dark bg-dark">
                        <div>
                            <a href="/" className="navbar-brand">Employees</a>
                        </div>
                    </nav>
                </header>
                
            </div>
        )
    }
}

export default NavbarComponent;