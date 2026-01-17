import React from 'react';
import { Sparkles, TrendingUp } from 'lucide-react';

const SuggestionCard = ({suggestion}) => {
  const {title,description,category,impact,cost}= suggestion
  const mapcategory= {
    layout: { text: "text-blue-800", bg: "bg-blue-100" },
    decor: { text: "text-green-800", bg: "bg-green-100" },
    lighting: { text: "text-amber-800", bg: "bg-amber-100" },
    color: { text: "text-pink-800", bg: "bg-pink-100" }
  }
  const mapimpact={
    high:{text: "text-emerald-600",icon:<TrendingUp size={18}/>},
    medium:{text: "text-amber-600", icon:<Sparkles size={18}/>}
  }
  return (
    <div className="p-4 bg-white border-2 border-gray-200 rounded-xl shadow-sm  relative hover:border-amber-300">
      {/* Top Section: Title and Checkbox */}
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <span className={`inline-block px-3 py-1 text-xs font-semibold ${mapcategory[category]?.text} ${mapcategory[category]?.bg} rounded-full`}>
            {category}
          </span>
        </div>
        <button 
          type="button" role="checkbox" aria-checked="false" value="on" data-state="unchecked"
          className="w-5 h-5 mt-1 border-black border rounded-lg focus:ring-emerald-500 cursor-pointer" 
        ></button>
      </div>

      {/* Description */}
      <p className="mt-2 text-gray-500 text-sm">
        {description}
      </p>

      {/* Divider */}
      <div className="my-2 border-t border-gray-100" />

      {/* Footer Section: Impact and Cost */}
      <div className="flex justify-between items-center">
        <div className={`flex items-center gap-1.5 ${mapimpact[impact]?.text} text-sm font-semibold`}>
          {mapimpact[impact]?.icon}
          <span className='capitalize'>{impact} Impact</span>
        </div>
        <div className="text-zinc-500 font-medium text-sm">
          {cost}
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;