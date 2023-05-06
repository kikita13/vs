import { fetchGroup } from '@/store/slices/groupSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const index = () => {
    const dispatch = useDispatch()
    const group = useSelector(state => state.group.group)

    return (
        <div onClick={() => {dispatch(fetchGroup('1'));}}>a
            {group.name}
        </div>
    );
};

export default index;