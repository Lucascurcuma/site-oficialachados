import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  withSlogan?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', withSlogan = false }) => {
  const sizes = {
    small: {
      imgSize: 'h-8',
      fontSize: 'text-lg'
    },
    medium: {
      imgSize: 'h-10',
      fontSize: 'text-2xl'
    },
    large: {
      imgSize: 'h-12',
      fontSize: 'text-4xl'
    }
  };
  
  const currentSize = sizes[size];
  
  return (
    <Link to="/" className="inline-block">
      <div className="flex flex-col items-center">
        <img 
          src="https://i.pinimg.com/736x/32/59/80/325980d05cf74099e8411ec2f56a55f9.jpg" 
          alt="Achadinhos Express Logo" 
          className={`${currentSize.imgSize} w-auto object-contain`}
        />
        {withSlogan && (
          <p className="text-xs mt-1 font-medium text-secondary">
            "SOLUÇÕES QUE CABEM NA SUA VIDA"
          </p>
        )}
      </div>
    </Link>
  );
};

export default Logo;