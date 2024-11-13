import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardTitle } from './kard';
import { Button } from './button';
import { Input } from './Input';
import { Store, MapPin } from 'lucide-react';

const PaymentGateway = () => {
    const location = useLocation();
    const { productData } = location.state || {};
    const [quantity, setQuantity] = useState(0);
  
    const pricePerKg = productData?.pricePerKg || 0.00;
  
    const calculateTotal = () => {
      return (quantity * pricePerKg).toFixed(2);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Image */}
                <div className="relative h-[300px] md:h-full overflow-hidden">
                  <img 
                    src={productData?.imageUrl}
                    alt={productData?.name}
                    className="object-cover w-full h-full"
                  />
                </div>
    
                {/* Product Details */}
                <div className="p-6">
                  <CardTitle className="text-2xl font-bold mb-4">Payments</CardTitle>
                  
                  <h2 className="text-xl font-semibold mb-2">{productData?.name}</h2>
                  
                  <div className="text-gray-600 mb-4">
                    <p className="mb-4">{productData?.description}</p>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <Store className="w-4 h-4" />
                      <span>{productData?.farmName}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{productData?.location}</span>
                    </div>
                    
                    <div className="font-semibold mb-4">
                      Price per kg: K{pricePerKg.toFixed(2)}
                    </div>
                  </div>
    
                  {/* Quantity Input */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <Input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        placeholder="Add Quantity"
                        className="w-full"
                      />
                    </div>
                    <div className="flex items-center">
                      <span>Total: K{calculateTotal()}</span>
                    </div>
                  </div>
    
                  {/* Payment Methods */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Payment Methods</h3>
                    <p className="text-gray-600 mb-4">Select a payment method</p>
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full justify-between h-14"
                        onClick={() => {}}
                      >
                        <div className="flex items-center gap-2">
                      <img 
                         src={require('../../Assets/Images/airtel mw money.png')} 
                         alt="Airtel Money"
                          className="w-8 h-8"
                           />
                              <span>Airtel Money</span>
                          </div>
                      </Button>
    
                      <Button
                        variant="outline"
                        className="w-full justify-between h-14"
                        onClick={() => {}}
                      >
                         <div className="flex items-center gap-2">
                          <img 
                           src={require('../../Assets/Images/images.png')} 
                           alt="Airtel Money"
                           className="w-8 h-8"
                           />
                         <span>Tnm Mpamba </span>
                            </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    };
    
    export default PaymentGateway;
    