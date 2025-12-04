import React from 'react';

export interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  price?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}