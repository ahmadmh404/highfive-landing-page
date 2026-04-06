import type { AITool } from "@/lib/types";

export const aiTools: AITool[] = [
  {
    id: "scorpe-search",
    name: "Scorpe Search",
    description: "aiTools.tools.scorpeSearch.desc",
    category: "code",
    icon: "Search",
    inputFields: [
      {
        name: "query",
        label: "aiTools.fields.query",
        type: "text",
        required: true,
        placeholder: "aiTools.fields.queryPlaceholder",
      },
      {
        name: "filters",
        label: "aiTools.fields.filters",
        type: "textarea",
        required: false,
        placeholder: "aiTools.fields.filtersPlaceholder",
      },
    ],
    outputFormat: "search",
  },
  {
    id: "scorpe-rank",
    name: "Scorpe Rank",
    description: "aiTools.tools.scorpeRank.desc",
    category: "analytics",
    icon: "TrendingUp",
    inputFields: [
      {
        name: "data",
        label: "aiTools.fields.data",
        type: "textarea",
        required: true,
        placeholder: "aiTools.fields.dataPlaceholder",
      },
      {
        name: "metric",
        label: "aiTools.fields.metric",
        type: "select",
        required: true,
        options: ["relevance", "popularity", "rating", "sales"],
      },
    ],
    outputFormat: "ranking",
  },
  {
    id: "scorpe-recommend",
    name: "Scorpe Recommend",
    description: "aiTools.tools.scorpeRecommend.desc",
    category: "content",
    icon: "Sparkles",
    inputFields: [
      {
        name: "userId",
        label: "aiTools.fields.userId",
        type: "text",
        required: true,
        placeholder: "aiTools.fields.userIdPlaceholder",
      },
      {
        name: "context",
        label: "aiTools.fields.context",
        type: "textarea",
        required: false,
        placeholder: "aiTools.fields.contextPlaceholder",
      },
      {
        name: "count",
        label: "aiTools.fields.count",
        type: "number",
        required: true,
      },
    ],
    outputFormat: "recommendations",
  },
];
