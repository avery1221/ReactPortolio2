import React from 'react';
import Card from '../components/Card'


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Portfolio',
                    subTitle: 'dev cook book',
                    imgSrc: ,
                    link: 'undefined',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Avery Rouser',
                    subTitle: 'dev cook book',
                    imgSrc: ,
                    link: 'undefined',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Covid Tracker',
                    subTitle: 'dev cook book',
                    imgSrc: ,
                    link: 'undefined',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        })

        this.setState({
            items
        });

        makeItems = (items) => {
            return items.map(item => {
                return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
            })
        }
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

    export default Carousel;