import { FormDefinition } from '@formity/react';

export const signUpFormSchema: FormDefinition = {
  type: 'form',
  fields: [
    {
      type: 'radio',
      name: 'userType',
      label: 'Account Type',
      options: [
        { value: 'collector', label: 'Collector' },
        { value: 'gallery', label: 'Gallery' }
      ],
      defaultValue: 'collector',
      required: true
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'your@email.com',
      required: true,
      validation: {
        pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
        message: 'Please enter a valid email address'
      }
    },
    {
      type: 'text',
      name: 'fullName',
      label: 'Full Name',
      placeholder: 'John Doe',
      required: true,
      validation: {
        minLength: 2,
        message: 'Full name must be at least 2 characters'
      }
    },
    {
      type: 'conditional',
      condition: {
        field: 'userType',
        operator: 'equals',
        value: 'gallery'
      },
      then: {
        type: 'text',
        name: 'galleryName',
        label: 'Gallery Name',
        placeholder: 'Gallery Name',
        required: true,
        validation: {
          minLength: 2,
          message: 'Gallery name must be at least 2 characters'
        }
      }
    },
    {
      type: 'group',
      fields: [
        {
          type: 'select',
          name: 'countryCode',
          label: 'Country Code',
          options: [
            { value: '+1', label: '+1 US/CA' },
            { value: '+34', label: '+34 ES' },
            { value: '+55', label: '+55 BR' },
            { value: '+351', label: '+351 PT' },
            { value: '+44', label: '+44 UK' },
            { value: '+33', label: '+33 FR' },
            { value: '+49', label: '+49 DE' },
            { value: '+39', label: '+39 IT' },
            { value: '+52', label: '+52 MX' },
            { value: '+54', label: '+54 AR' }
          ],
          defaultValue: '+1',
          required: true
        },
        {
          type: 'tel',
          name: 'phone',
          label: 'Phone Number',
          placeholder: '1234567890',
          required: true,
          validation: {
            pattern: '^[0-9]{6,15}$',
            message: 'Phone number must be 6-15 digits'
          }
        }
      ]
    },
    {
      type: 'password',
      name: 'password',
      label: 'Password',
      placeholder: '••••••••',
      required: true,
      validation: {
        minLength: 8,
        message: 'Password must be at least 8 characters'
      }
    }
  ],
  submitButton: {
    label: 'Create Account'
  }
};
