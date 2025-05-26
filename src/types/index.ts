export interface FormData {
  name: string;
  phone: string;
  cep: string;
  address: string;
  number: string;
  reference: string;
  state: string;
  city: string;
  deliveryDate: string;
}

export interface DeliveryDate {
  value: string;
  label: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  modalType?: 'standard' | 'confirmation';
}

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialProps {
  text: string;
  author: string;
}

export interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

export interface BenefitCardProps {
  icon: string;
  text: string;
}