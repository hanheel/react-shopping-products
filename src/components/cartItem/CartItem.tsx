import styled from '@emotion/styled';
import CounterControl from '../common/countButton/CounterControl';

interface CartItemProps {
  count: number;
}

const CartItem = ({ count }: CartItemProps) => {
  return (
    <CartItemContainer>
      <CartItemImage src="./default-product.png" />
      <CartItemInfoContainer>
        <CartItemName>상품명</CartItemName>
        <CartItemPrice>10000원</CartItemPrice>
        <CounterControl count={count} />
      </CartItemInfoContainer>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-top: 1px solid var(--color-light-grey);
  border-bottom: 1px solid var(--color-light-grey);
  padding: 8px 0;
`;

const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
`;

const CartItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
  width: 100%;
`;

const CartItemName = styled.span`
  font-size: var(--font-size-subtitle);
  font-weight: var(--font-weight-subtitle);
`;

const CartItemPrice = styled.span`
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-body);
`;

export default CartItem;
