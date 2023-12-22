import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create class Component
class ResturantMenu extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Shreeji Resturant Menu</h1>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-4'>
                        <div className='card shadow'>
                            <div className='card-header text-bg-danger'>
                                <h3>Pav bhaji</h3>
                            </div>
                            <div className='card-body'>
                                <img src='https://picsum.photos/300' className='img-fluid' />
                                <ul class="list-group">
                                    <li class="list-group-item">Boil the mixed vegetables until they are soft. Mash them using a potato masher or fork.</li>
                                    <li class="list-group-item">In a pan, heat oil and butter together. Add minced garlic, ginger, and green chilies. Sauté until the raw smell disappears.</li>
                                    <li class="list-group-item">Add finely chopped onions and cook until they become translucent.</li>
                                    <li class="list-group-item">Add chopped bell peppers and cook for a few minutes until they soften.</li>
                                    <li class="list-group-item">Add finely chopped tomatoes and cook until they become mushy.</li>
                                    <li class="list-group-item">Add pav bhaji masala, red chili powder, turmeric powder, and salt. Mix well and cook for 2-3 minutes.</li>
                                    <li class="list-group-item">Add the mashed vegetables and green peas. Mix thoroughly and cook for 5-7 minutes, allowing the flavors to blend. Add water if needed to achieve the desired consistency.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='card shadow'>
                            <div className='card-header text-bg-danger'>
                                <h3>Masala dosa</h3>
                            </div>
                            <div className='card-body'>
                                <img src='https://picsum.photos/300?random=2' className='img-fluid' />
                                <ul class="list-group">
                                    <li class="list-group-item">Boil the mixed vegetables until they are soft. Mash them using a potato masher or fork.</li>
                                    <li class="list-group-item">In a pan, heat oil and butter together. Add minced garlic, ginger, and green chilies. Sauté until the raw smell disappears.</li>
                                    <li class="list-group-item">Add finely chopped onions and cook until they become translucent.</li>
                                    <li class="list-group-item">Add chopped bell peppers and cook for a few minutes until they soften.</li>
                                    <li class="list-group-item">Add finely chopped tomatoes and cook until they become mushy.</li>
                                    <li class="list-group-item">Add pav bhaji masala, red chili powder, turmeric powder, and salt. Mix well and cook for 2-3 minutes.</li>
                                    <li class="list-group-item">Add the mashed vegetables and green peas. Mix thoroughly and cook for 5-7 minutes, allowing the flavors to blend. Add water if needed to achieve the desired consistency.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='card shadow'>
                            <div className='card-header text-bg-danger'>
                                <h3>Pulav</h3>
                            </div>
                            <div className='card-body'>
                                <img src='https://picsum.photos/300?random=3' className='img-fluid' />
                                <ul class="list-group">
                                    <li class="list-group-item">Boil the mixed vegetables until they are soft. Mash them using a potato masher or fork.</li>
                                    <li class="list-group-item">In a pan, heat oil and butter together. Add minced garlic, ginger, and green chilies. Sauté until the raw smell disappears.</li>
                                    <li class="list-group-item">Add finely chopped onions and cook until they become translucent.</li>
                                    <li class="list-group-item">Add chopped bell peppers and cook for a few minutes until they soften.</li>
                                    <li class="list-group-item">Add finely chopped tomatoes and cook until they become mushy.</li>
                                    <li class="list-group-item">Add pav bhaji masala, red chili powder, turmeric powder, and salt. Mix well and cook for 2-3 minutes.</li>
                                    <li class="list-group-item">Add the mashed vegetables and green peas. Mix thoroughly and cook for 5-7 minutes, allowing the flavors to blend. Add water if needed to achieve the desired consistency.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
root.render(<ResturantMenu />)