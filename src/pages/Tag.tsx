import React, { useState } from 'react'
import Tag from '../components/Tag'

interface TagData {
  id: number
  label: string
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'default'
  shape?: 'rounded' | 'circle'
  icon?: React.ReactNode
  removable?: boolean
}

interface TagSections {
  sizes: TagData[]
  colors: TagData[]
  shapes: TagData[]
  icons: TagData[]
  removable: TagData[]
  combined: TagData[]
}

const TagPage: React.FC = () => {
  // Initial tag data organized by section
  const initialTags: TagSections = {
    sizes: [
      { id: 1, label: 'Small', size: 'small' },
      { id: 2, label: 'Medium', size: 'medium' },
      { id: 3, label: 'Large', size: 'large' },
    ],
    colors: [
      { id: 4, label: 'Primary', color: 'primary' },
      { id: 5, label: 'Secondary', color: 'secondary' },
      { id: 6, label: 'Info', color: 'info' },
      { id: 7, label: 'Success', color: 'success' },
      { id: 8, label: 'Warning', color: 'warning' },
      { id: 9, label: 'Danger', color: 'danger' },
    ],
    shapes: [
      { id: 10, label: 'Rounded', color: 'primary', shape: 'rounded' },
      { id: 11, label: 'Circle', color: 'secondary', shape: 'circle' },
    ],
    icons: [
      { id: 12, label: 'Primary', color: 'primary', icon: <img src='/download.png' alt='download' width={14} /> },
      { id: 13, label: 'Secondary', color: 'secondary', icon: <img src='/download.png' alt='download' width={14} /> },
      { id: 14, label: 'Info', color: 'info', icon: <img src='/download.png' alt='download' width={14} /> },
      { id: 15, label: 'Success', color: 'success', icon: <img src='/download.png' alt='download' width={14} /> },
      { id: 16, label: 'Warning', color: 'warning', icon: <img src='/download.png' alt='download' width={14} /> },
      { id: 17, label: 'Danger', color: 'danger', icon: <img src='/download.png' alt='download' width={14} /> },
    ],
    removable: [
      { id: 18, label: 'Primary', color: 'primary', removable: true },
      { id: 19, label: 'Secondary', color: 'secondary', removable: true },
      { id: 20, label: 'Info', color: 'info', removable: true },
    ],
    combined: [
      {
        id: 21,
        label: 'Primary Rounded',
        color: 'primary',
        shape: 'rounded',
        icon: <img src='/download.png' alt='download' width={14} />,
        removable: true,
      },
      {
        id: 22,
        label: 'Secondary Circle',
        color: 'secondary',
        shape: 'circle',
        icon: <img src='/download.png' alt='download' width={14} />,
        removable: true,
      },
      {
        id: 23,
        label: 'Info',
        color: 'info',
        shape: 'rounded',
        icon: <img src='/download.png' alt='download' width={14} />,
        removable: true,
      },
    ],
  }

  const [tags, setTags] = useState<TagSections>(initialTags)

  const removeTag = (section: keyof TagSections, id: number) => {
    setTags((prevTags) => ({
      ...prevTags,
      [section]: prevTags[section].filter((tag) => tag.id !== id),
    }))
  }

  return (
    <div className='container'>
      <h1>Tag Component Showcase</h1>

      <div className='grid grid-cols-2 gap-6'>
        <div className='card'>
          <div className='card-title'>Sizes</div>
          <div className='card-body'>
            <div className='grid-cols-3 gap-4 align-center'>
              {tags.sizes.map((tag) => (
                <Tag key={tag.id} label={tag.label} size={tag.size} />
              ))}
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Colors</div>
          <div className='card-body'>
            <div className='grid-cols-3 gap-4 align-center'>
              {tags.colors.map((tag) => (
                <Tag key={tag.id} label={tag.label} color={tag.color} />
              ))}
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Shapes</div>
          <div className='card-body'>
            <div className='grid-cols-3 gap-4 align-center'>
              {tags.shapes.map((tag) => (
                <Tag key={tag.id} label={tag.label} color={tag.color} shape={tag.shape} />
              ))}
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Icons</div>
          <div className='card-body'>
            <div className='grid-cols-3 gap-4 align-center'>
              {tags.icons.map((tag) => (
                <Tag key={tag.id} label={tag.label} color={tag.color} icon={tag.icon} />
              ))}
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Removable Tags</div>
          <div className='card-body'>
            <div className='grid-cols-3 gap-4 align-center'>
              {tags.removable.map((tag) => (
                <Tag
                  key={tag.id}
                  label={tag.label}
                  color={tag.color}
                  removable
                  onClick={() => removeTag('removable', tag.id)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>Combined Properties</div>
          <div className='card-body'>
            <div className='grid-cols-3 gap-4 align-center'>
              {tags.combined.map((tag) => (
                <Tag
                  key={tag.id}
                  label={tag.label}
                  color={tag.color}
                  shape={tag.shape}
                  icon={tag.icon}
                  removable
                  onClick={() => removeTag('combined', tag.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TagPage
