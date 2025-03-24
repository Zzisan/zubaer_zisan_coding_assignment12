import React, { useState } from 'react';
import './App.css';

// Import components
import Button from './components/Button/Button';
import Label from './components/Label/Label';
import Text from './components/Text/Text';
import Dropdown from './components/Dropdown/Dropdown';
import RadioButton from './components/RadioButton/RadioButton';
import Image from './components/Image/Image';
import HeroImage from './components/HeroImage/HeroImage';
import Card from './components/Card/Card';
import Input from './components/Input/Input';

function App() {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');

  // Define dropdown options as an array of objects with value & label
  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Component Library</h1>
        <p>This is the production build of my UI component library.</p>

        {/* Hero Image */}
        <HeroImage
          src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Welcome to My Site"
          subtitle="This is my custom hero section"
          height="450px"
          overlay
          align="center"
        />

        {/* Button */}
        <Button>Click Me</Button>

        {/* Label */}
        <Label htmlFor="input-field" disabled={false}>
          This is a label
        </Label>

        {/* Text Component */}
        <Text fontSize="18px" color="#333" bold italic>
          This is a sample text component.
        </Text>

        <Dropdown
          options={dropdownOptions}
          onChange={(value) => setSelectedValue(value)}
          disabled={false}
        />
        <p>Selected Value: {selectedValue}</p>

        <RadioButton
          name="group1"
          label="Option A"
          checked={selectedValue === 'A'}
          onChange={() => setSelectedValue('A')}
        />

        <RadioButton
          name="group1"
          label="Option B"
          checked={selectedValue === 'B'}
          onChange={() => setSelectedValue('B')}
        />

        {/* Image */}
        <Image
          src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Sample Image"
          width="300px"
          height="200px"
          rounded
          bordered
        />

        {/* Card */}
        <Card
          image="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Custom Card Title"
          description="This is a detailed description of my card."
          buttonText="Learn More"
        />

        {/* Input Field */}
        <Input
          label="Enter Text"
          placeholder="Type here..."
          value={inputValue}
          onChange={(value) => setInputValue(value)}
          disabled={false}
        />
      </header>
    </div>
  );
}

export default App;
