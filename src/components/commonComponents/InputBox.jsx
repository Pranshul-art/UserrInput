export function InputBox({label,placeholder,onChange,value}){
    return <div>
            <div className="text-sm font-medium text-left py-2">
                {label}
            </div>
                <input value={value} onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 md:py-2 border rounded border-slate-300 bg-slate-200 "/>
        </div>
    
}