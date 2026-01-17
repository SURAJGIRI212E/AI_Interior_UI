
import SuggestionCard from './SuggestionCard'

// Helper function to simulate API delay (Remove this in production) //response should be cahed because user can regenerate the image multiple times form same suggestion response and seecting this suggestion agian
const getAiSuggestions = async (imageurl) => {
  await new Promise(resolve => setTimeout(resolve, 10000));
  
  // Real API call goes here:
  // const res = await fetch('https://your-backend-api.com/generate-design', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ image: imageUrl }),
  //   cache: 'no-store' // Ensure we never cache this; always get fresh AI results
  // });

  // if (!res.ok) {
  //   throw new Error('Failed to fetch suggestions');
  // }

  // return res.json();

  const suggestionsdata=[
    {
      "title": "Add Ambient Lighting",
      "description": "Install warm LED strip lights along the ceiling perimeter to create a cozy atmosphere and enhance the room's depth.",
      "category": "lighting",
      "impact": "high",
      "cost": "$150-300"
    },
    {
      "title": "Introduce Natural Textures",
      "description": "Add woven baskets, jute rug, or wooden elements to bring warmth and organic feel to the space.",
      "category": "decor",
      "impact": "medium",
      "cost": "$200-400"
    },
    {
      "title": "Accent Wall Color",
      "description": "Paint one wall in a warm terracotta or sage green to create a focal point and add visual interest.",
      "category": "color",
      "impact": "high",
      "cost": "$100-250"
    },
    {
      "title": "Layer Window Treatments",
      "description": "Add sheer curtains with heavier drapes for better light control and a more luxurious appearance.",
      "category": "decor",
      "impact": "medium",
      "cost": "$180-350"
    },
    {
      "title": "Optimize Furniture Placement",
      "description": "Rearrange seating to create better conversation areas and improve traffic flow through the room.",
      "category": "layout",
      "impact": "high",
      "cost": "$0"
    },
    {
      "title": "Add Statement Artwork",
      "description": "Hang a large-scale artwork or gallery wall to draw the eye upward and add personality to the space.",
      "category": "decor",
      "impact": "medium",
      "cost": "$150-500"
    },
    {
      "title": "Incorporate Plants",
      "description": "Add 2-3 medium to large indoor plants to bring life, improve air quality, and add natural color.",
      "category": "decor",
      "impact": "medium",
      "cost": "$80-200"
    },
    {
      "title": "Update Light Fixtures",
      "description": "Replace outdated fixtures with modern pendant lights or a statement chandelier as a focal point.",
      "category": "lighting",
      "impact": "high",
      "cost": "$250-600"
    }
  ]
  return [...suggestionsdata,
    { title: "Modern Minimalist Layout", description: "Declutter and open up the floor plan.", category: "layout", impact: "high", cost: "$0" },
    { title: "Warm Ambient Lighting", description: "Add floor lamps to corners.", category: "lighting", impact: "medium", cost: "$50" },
    { title: "Neutral Color Palette", description: "Paint walls in soft beige.", category: "color", impact: "high", cost: "$100" },
  ];
}

const Suggestion = async({imageUrl}) => {
  const suggestionsdata = await getAiSuggestions(imageUrl);
  return (
    <div>
         {/* suggestions header*/}
         <div>
            <h1 className='text-3xl font-bold'>Design Suggestions</h1>
            <p className='text-zinc-500'>Our AI has analyzed your space and generated 8 personalized recommendations</p>
        </div>
        {/* suggestions container */}
        <div>
            {/* selection header */}
            <div className='flex items-center justify-between border border-zinc-200 p-3 rounded-lg my-4'>
                <div>
                    <h1 className='text-md font-semibold'>0 of 8 suggestions selected</h1>
                    <p className='text-xs text-zinc-500'>Select the improvements you had like to apply to your space</p>
                </div>
                <div className='flex justify-between gap-2'>
                     <button className='border border-amber-500 px-4 py-1 rounded-lg shadow-md text-sm hover:bg-amber-100'>Select All</button>
                <button className='border border-zinc-300 px-4 py-1 rounded-lg shadow-2xl text-sm' disabled={true}>Clear</button>
                </div>
            </div>
            {/* suggestions container */}
            <div >
               {
                suggestionsdata.map((suggestion,index)=>(
                  <div key={index} className='mb-4'>
                    <SuggestionCard suggestion={suggestion} />
                  </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default Suggestion