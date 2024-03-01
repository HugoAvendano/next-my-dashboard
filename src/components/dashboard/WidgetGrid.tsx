'use client'

import { SimpleWidget } from '..'
import { IoCartOutline } from 'react-icons/io5';
import { useAppSelector } from '@/store';

export const WidgetGrid = () => {
    const cart = useAppSelector(state => state.counter);
    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget
                label='Counter'
                subtitle='Products in Cart'
                title={cart.count}
                icon={<IoCartOutline size={50} className="text-blue-600" />}
                href='/dashboard/counter'
            />
        </div>
    )
}
