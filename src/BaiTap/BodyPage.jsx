import React, { Component } from "react";
const data = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
];
export default class extends Component {
    state = {
        chiTietSP: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "

        }
    }
    changeSP = (id) => {
        this.setState({
            chiTietSP: data[id - 1]
        })
    }
    renderGlasses = () => {
        let content = [];
        for (let i = 1; i < 10; i++) {
            let kk = "./glassesImage/g" + i + ".jpg"
            content.push(<div className='glass' onClick={() => this.changeSP(i)} ><img className='w-100' src={kk} /></div>);
        }
        return content;
    };
    render() {

        const { desc, id, name, price, url } = this.state.chiTietSP;
        return (
            <div className="bg-full">
                <div className="top d-flex">
                    <div className="img">
                        <img src="./glassesImage/model.jpg" />
                        <div className="box-glasses">
                            <img className="img-glasses" src={url} />

                        </div>
                        <div className="coatting">
                            <h3 className="name">{name}</h3>
                            <p className="decs">{desc}</p>
                        </div>
                    </div>
                    <div className="img">
                        <img src="./glassesImage/model.jpg" />
                        <div className="box-glasses">

                            <img className="img-glasses" src={url} />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="glasses_button d-flex">{this.renderGlasses()}</div>
                </div>
            </div>
        );
    }
}
