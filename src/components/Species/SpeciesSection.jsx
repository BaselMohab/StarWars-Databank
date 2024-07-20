import React from 'react';
import {
Card,
CardHeader,
CardBody,
Typography,
} from "@material-tailwind/react";

export default function SpeciesSection({ title, items, singleItem = false }) {
  return (
    <div className='mb-20'>
    <h3 className='text-3xl text-white font-bold mb-4 border-b border-yellow-500'>{title}</h3>
    {items.length > 0 ? (
        <div className={`grid gap-4 ${singleItem ? '' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
        {items.map((item, index) => (
            <Card className="w-full bg-transparent border border-gray-600 shadow-lg card" key={index}>
            <CardHeader floated={false} className="h-80">
                <img src={item.imageUrl} alt={item.name} />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="yellow-500" className="mb-2">
                {item.name || item.title}
                </Typography>
            </CardBody>
            </Card>
        ))}
        </div>
    ) : (
        <p className="text-gray-400 italic">No {title} available for this Species.</p>
    )}
    </div>
  )
}
