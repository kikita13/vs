import Card from '@/components/main/cards/card/card';
import { fetchGroup } from '@/store/slices/groupSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const index = () => {
    const dispatch = useDispatch()
    const group = useSelector(state => state.group.group)

    return (
        <Card/>
    );
};

export default index;