import React, {Component} from 'react';
import '@aws-amplify/ui-react/styles.css';
import { API, graphqlOperation } from "aws-amplify";
import { listChefs } from '../../graphql/queries';
import { Amplify, Storage } from 'aws-amplify';

import { 
    Chefs
   } from '../../ui-components';

export default class Chef extends Component {
    constructor(props) {
        super(props);
        this.state = {chefs: [],responseUrl:"" };
      }
      componentDidMount() {
        this.listQuery();
      }
      listQuery = async () => {
        console.log("listing todos");
        const allChefs = await API.graphql(graphqlOperation(listChefs));
        let items = allChefs.data.listChefs.items;
        const newItems = await Promise.all(items.map(async (item) => {
          const imageUrl = await Storage.get(item.id);
          item.image = imageUrl;
          console.log("imageUrl "+imageUrl);
          return item;
        }));
       
        this.setState({
          chefs: newItems,
          responseUrl: newItems[0].image
        });
      };
      render() {
        return (
            <Chefs overrides={{"Chefs": { items: this.state.chefs } }} />
        );
      }
}