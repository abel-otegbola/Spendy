import { BookOpenIcon, BriefcaseIcon, InfoIcon, NetworkIcon, SearchCheckIcon, UsersIcon } from "lucide-react";

export default function ResourcesSubMenu() {
    return (
        <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
                <p className="opacity-50 uppercase text-[12px] p-2">Resources</p>
                {
                    [
                        {
                            id: 0,
                            title: "Insights",
                            icon: <BookOpenIcon strokeWidth={1} size={28} />,
                            text: "Stay ahead with insights on engineering innovations, technologies, research, and industry trends."
                        },
                        {
                            id: 1,
                            title: "Opportunities",
                            icon: <SearchCheckIcon strokeWidth={1} size={28} />,
                            text: "Discover engineering competitions, internships, scholarships, events, and career opportunities."
                        },
                        {
                            id: 2,
                            title: "Network",
                            icon: <NetworkIcon strokeWidth={1} size={28} />,
                            text: "Connect with engineers, researchers, and industry professionals while sharing knowledge and ideas."
                        },
                    ].map(item => (
                        <div key={item.id} className="flex items-start gap-2 p-2 pb-3 hover:bg-muted/[0.5] cursor-pointer rounded-[10px]">
                            {item.icon}
                            <div className="flex flex-col gap-1">
                                <h3 className="font-medium">{item.title}</h3>
                                <p className="opacity-75">{item.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col gap-2">
                <p className="opacity-50 uppercase text-[12px] p-2">Company</p>
                {
                    [
                        {
                            id: 0,
                            title: "About us",
                            icon: <InfoIcon strokeWidth={1} size={28} />,
                            text: "Learn about Ennovate and our mission to make engineering knowledge more accessible."
                        },
                        {
                            id: 1,
                            title: "Careers",
                            icon: <BriefcaseIcon strokeWidth={1} size={28} />,
                            text: "Explore career opportunities and discover pathways to build a meaningful career in engineering."
                        },
                        {
                            id: 2,
                            title: "Community",
                            icon: <UsersIcon strokeWidth={1} size={28} />,
                            text: "Join a growing community of engineers, students, researchers, and professionals sharing ideas."
                        },
                    ].map(item => (
                        <div key={item.id} className="flex items-start gap-2 p-2 pb-3 hover:bg-muted/[0.5] cursor-pointer rounded-[10px]">
                            {item.icon}
                            <div className="flex flex-col gap-1">
                                <h3 className="font-medium">{item.title}</h3>
                                <p className="opacity-75">{item.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}