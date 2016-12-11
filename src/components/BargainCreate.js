import React, { Component } from 'react';
import { Text } from 'react-native'; 
import { connect } from 'react-redux';
import { bargainCreate, bargainUpdate } from '../actions';
import { Button, Card, CardSection, Input } from './common';

class BargainCreate extends Component {
  onAddButtonPress() {
    const { product, quantity, brand, price, store } = this.props;
    console.log('this.props BargainCreate', this.props);
  }

  render() {
    // localization pt_BR
    return (
      <Card>
        <CardSection>
          <Input
            label="Produto"
            onChangeText={
              value => this.props.bargainUpdate({
                prop: 'product', value
              })}
            placeholder="Macarrão Instantâneo"
            value={this.props.product}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Quantidade"
            onChangeText={
              value => this.props.bargainUpdate({
                prop: 'quantity', value
              })}
            placeholder="Pacote de 300g"
            value={this.props.quantity}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Marca"
            onChangeText={
              value => this.props.bargainUpdate({
                prop: 'brand', value
              })}
            placeholder="da Mônica"
            value={this.props.brand}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Preço"
            onChangeText={
              value => this.props.bargainUpdate({
                prop: 'price', value
              })}
            placeholder="R$ 1,39"
            value={this.props.price}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Mercado"
            onChangeText={
              value => this.props.bargainUpdate({
                prop: 'store', value
              })}
            placeholder="Noite&"
            value={this.props.store}
          />
        </CardSection>

        <CardSection>
          <Button>Cancelar</Button>
          <Button onPress={this.onAddButtonPress.bind(this)}>Adicionar</Button>
        </CardSection>

      </Card>
      // Wire or remove cancel button if back works well 
    );
  }
}

const mapStateToProps = (state) => {
  const { product, quantity, brand, price, store } = state.bargainForm;
  return { product, quantity, brand, price, store }; 
};

export default connect(mapStateToProps, { bargainCreate, bargainUpdate })(BargainCreate);
