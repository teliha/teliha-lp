"use client"

import React, { useState, useEffect, useCallback } from "react"
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  Background,
  Connection,
  ConnectionMode,
  useNodesState,
  useEdgesState,
  NodeTypes,
  EdgeTypes,
  FitViewOptions,
  getBezierPath,
  Position,
} from "reactflow"
import "reactflow/dist/style.css"
import { 
  Shuffle, 
  FileText, 
  Cog, 
  FileCode, 
  Repeat, 
  Database, 
  BarChart2, 
  Droplet, 
  PieChart, 
  Wallet, 
  Key, 
  Building, 
  MapPin 
} from "lucide-react"
import { PersonIcon, ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import Image from 'next/image'
import Link from 'next/link'

// Custom components for both diagrams
const CustomGroup: React.FC<{ data: { width: number; height: number } }> = ({ data }) => (
  <div
    style={{
      width: data.width,
      height: data.height,
      border: '2px dashed #888',
      borderRadius: '8px',
      position: 'absolute',
      zIndex: -1,
    }}
  />
)

const CustomNode: React.FC<{ data: { label: React.ReactNode }, style?: React.CSSProperties }> = ({ data, style }) => (
  <div style={style}>{data.label}</div>
)

const CustomEdge: React.FC<{
  id: string
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
  sourcePosition: Position
  targetPosition: Position
  style?: React.CSSProperties
  data?: Record<string, unknown>
}> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
}) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <path
      id={id}
      style={style}
      className="react-flow__edge-path"
      d={edgePath}
      strokeWidth={2}
      stroke="#000"
    />
  );
}

const nodeTypes: NodeTypes = {
  groupNode: CustomGroup,
  custom: CustomNode,
}

const edgeTypes: EdgeTypes = {
  custom: CustomEdge,
}

// Predy diagram component (left side)
const PredyDiagram = () => {
  const initialNodes: Node[] = [
    {
      id: "0",
      type: "input",
      data: { 
        label: (
          <div className="flex items-center">
            <PersonIcon className="mr-2 w-[18px] h-[18px]" />
            <span>Lender</span>
          </div>
        ) 
      },
      position: { x: -150, y: 20 },
      style: { 
        background: "#FF9500", 
        color: "#fff", 
        border: "none", 
        borderRadius: "8px", 
        fontFamily: "Satoshi, sans-serif",
        padding: "10px"
      },
    },
    {
      id: "1",
      type: "input",
      data: { 
        label: (
          <div className="flex items-center">
            <Shuffle className="mr-2" size={18} />
            <span>Swap, Perp, Gamma Trader</span>
          </div>
        ) 
      },
      position: { x: 50, y: 20 },
      style: { 
        background: "#FF3B30", 
        color: "#fff", 
        border: "none", 
        borderRadius: "8px", 
        fontFamily: "Satoshi, sans-serif",
        padding: "10px"
      },
    },
    {
      id: "4",
      data: { 
        label: (
          <div className="flex items-center">
            <FileText className="mr-2" size={18} />
            <span>Intent Order</span>
          </div>
        ) 
      },
      position: { x: 50, y: 100 },
      style: { background: "#5AC8FA", color: "#000", border: "none", borderRadius: "8px", fontFamily: "Satoshi, sans-serif", padding: "10px" },
    },
    {
      id: "5",
      data: { 
        label: (
          <div className="flex items-center">
            <Cog  className="mr-2" size={18} />
            <span>Facilitator</span>
          </div>
        ) 
      },
      position: { x: 50, y: 180 },
      style: { background: "#007AFF", color: "#fff", border: "none", borderRadius: "8px", fontFamily: "Satoshi, sans-serif", padding: "10px" },
    },
    {
      id: "6",
      data: { 
        label: (
          <div className="flex  items-center">
            <FileCode className="mr-2" size={18} />
            <span>Handling Contract</span>
          </div>
        ) 
      },
      position: { x: 50, y: 260 },
      style: { background: "#FFCC00", color: "#000", border: "none", borderRadius: "8px", fontFamily: "Satoshi, sans-serif", padding: "10px" },
    },
    {
      id: "7",
      data: { 
        label: (
          <div className="flex items-center">
            <Database className="mr-2" size={18} />
            <span>Lending Pool</span>
          </div>
        ) 
      },
      position: { x: -150, y: 260 }, 
      style: { background: "#5856D6", color: "#fff", border: "none", borderRadius: "8px", fontFamily:  "Satoshi, sans-serif", padding: "10px" },
    },
    {
      id: "11",
      data: { 
        label: (
          <div className="flex items-center">
            <PieChart className="mr-2" size={18} />
            <span>Margin Management Contract</span>
          </div>
        ) 
      },
      position: { x: -150, y: 340 }, 
      style: { background: "#FF9500", color: "#fff", border: "none", borderRadius: "8px", fontFamily: "Satoshi, sans-serif", padding: "10px" },
    },
    {
      id: "8",
      type: "output",
      data: { 
        label: (
          <div className="flex items-center">
            <Repeat className="mr-2" size={18} />
            <span>Swap Contract</span>
          </div>
        ) 
      },
      position: { x: -150, y: 420 },
      style: { background: "#5856D6", color: "#fff", border: "none", borderRadius: "8px", fontFamily: "Satoshi, sans-serif", padding: "10px" },
    },
    {
      id: "9",
      data: { 
        label: (
          <div className="flex items-center">
            <BarChart2 className="mr-2" size={18} />
            <span>LP Rebalancing Contract</span>
          </div>
        ) 
      },
      position: { x: 50, y: 340 }, 
      style: { background: "#FF9500", color: "#fff", border: "none", borderRadius: "8px", fontFamily: "Satoshi, sans-serif", padding: "10px" },
    },
    {
      id: "10",
      data: { 
        label: (
          <div className="flex items-center">
            <Droplet className="mr-2" size={18} />
            <span>Liquidity Pool</span>
          </div>
        ) 
      },
      position: { x: 50, y: 420 }, 
      style: { background: "#E8006F", color: "#fff", border: "none", borderRadius: "8px", fontFamily: "Satoshi, sans-serif", padding: "10px" },
      targetPosition: 'top' as Position,
    },
    {
      id: "group1",
      type: "groupNode",
      position: { x: -200, y: 230 },
      style: { width: 430, height: 185 },
      data: { width: 430, height: 185 },
    },
    {
      id: "horizontal-line",
      type: "custom",
      data: { label: "" },
      position: { x: -150, y: 150 }, 
      style: { 
        width: 400, 
        height: 1, 
        border: "none", 
        borderTop: "2px dashed #4A90E2",
        backgroundImage: "linear-gradient(to right, #4A90E2 50%, transparent 50%)",
        backgroundSize: "20px 1px",
        backgroundRepeat: "repeat-x"
      },
    },
    {
      id: "onchain-text",
      type: "custom",
      data: { label: "OnChain" },
      position: { x: -150, y: 160 }, 
      style: { 
        color: "#000", 
        fontFamily: "Satoshi, sans-serif",
        fontSize: "14px",
        fontWeight: "bold",
      },
    },
    {
      id: "predy-coverage",
      type: "custom",
      data: { label: "Predy Coverage" },
      position: { x: -200, y: 200 },
      style: { 
        color: "#FFD700", 
        fontFamily: "Satoshi, sans-serif",
        fontSize: "18px", 
        fontWeight: "bold", 
        backgroundColor: "rgba(0, 0, 0, 0.7)", 
        padding: "5px 10px", 
        borderRadius: "4px", 
      },
      
    },
    {
      id: "diagram-title-left",
      type: "custom",
      data: { label: "Predy: Maximum Capital Efficiency for AMMs" },
      position: { x: -200, y: -50 },
      style: { 
        color: "#000", 
        fontFamily: "Satoshi, sans-serif",
        fontSize: "24px", 
        fontWeight: "bold",
      },
    },
  ]

  const initialEdges: Edge[] = [
    { 
      id: "e0-7", 
      source: "0", 
      target: "7", 
      animated: true, 
      style: { stroke: "#000" },
      type: 'smoothstep',
    },
    { 
      id: "e1-4",
      source: "1",
      target: "4",
      animated: true,
      style: { stroke: "#000" },
      type: 'smoothstep',
    },
    { 
      id: "e4-5", 
      source: "4", 
      target: "5", 
      animated: true, 
      style: { stroke: "#000" },
    },
    { 
      id: "e5-6", 
      source: "5", 
      target: "6", 
      animated: true, 
      style: { stroke: "#000" },
    },
    { 
      id: "e11-7", 
      source: "11", 
      target: "7", 
      animated: true, 
      style: { stroke: "#000" },
      type: 'smoothstep',
    },
    { 
      id: "e6-9", 
      source: "6", 
      target: "9", 
      animated: true, 
      style: { stroke: "#000" },
      type: 'smoothstep',
    },
    { 
      id: "e9-10", 
      source: "9", 
      target: "10", 
      animated: true, 
      style: { stroke: "#000" },
      type: 'custom',
      label: "Liquidity Providing",
      labelStyle: { fill: "#000", fontWeight: 700, fontFamily: "Satoshi, sans-serif" },
      labelBgStyle: { fill: "rgba(255,255,255,0.7)", fillOpacity: 0.7 },
    },
    { 
      id: "e6-11", 
      source: "6", 
      target: "11", 
      animated: true, 
      style: { stroke: "#000" },
      type: 'smoothstep',
    },
    { 
      id: "e11-8", 
      source: "11", 
      target: "8", 
      animated: true, 
      style: { stroke: "#000" },
      type: 'smoothstep',
    },
  ]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge(params, eds))
    },
    [setEdges]
  )

  const fitViewOptions: FitViewOptions = {
    padding: 0.2,
    includeHiddenNodes: true,
    minZoom: 0.2,
    maxZoom: 1,
  }

  return (
    <div className="relative w-full h-full min-h-[400px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
        fitView
        fitViewOptions={fitViewOptions}
        style={{ background: "#fff" }}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnScroll={false}
        panOnDrag={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        minZoom={0.2}
        maxZoom={1}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#444" gap={12} size={1} />
      </ReactFlow>
    </div>
  )
}

// Prex diagram component (right side)
const PrexDiagram = () => {
  const initialNodes: Node[] = [
    {
      id: "1",
      type: "input",
      data: { 
        label: (
          <div className="flex items-center">
            <Wallet className="mr-2" size={18} />
            <span>EOA with WalletApp</span>
          </div>
        ) 
      },
      position: { x: 50, y: 20},
      style: { 
        background: "#FF3B30", 
        color: "#fff", 
        border: "none", 
        borderRadius: "8px", 
        fontFamily: "Satoshi, sans-serif",
        padding: "10px"
      },
    },
    {
      id: "2",
      type: "input",
      data: { 
        label: (
          <div className="flex items-center">
            <Key className="mr-2" size={18} />
            <span>AA with Passkey</span>
          </div>
        ) 
      },
      position: { x: 300, y: 20 },
      style: { background: "#34C759", color: "#fff", border: "none", borderRadius: "8px", fontFamily: "Satoshi, sans-serif", padding: "10px" },
    },
    {
      id: "3",
      data: { 
        label: (
          <div className="flex items-center">
            <FileText className="mr-2" size={18} />
            <span>Intent Order</span>
          </div>
        ) 
      },
      position: { x: 300, y: 100 },
      style: { background: "#5AC8FA", color: "#000", border: "none", borderRadius: "8px", fontFamily: "Satoshi, sans-serif", padding: "10px" },
    },
    {
      id: "4",
      data: { 
        label: (
          <div className="flex items-center">
            <Cog className="mr-2" size={18} />
            <span>Facilitator</span>
          </div>
        ) 
      },
      position: { x: 300, y: 180 },
      style: { background: "#007AFF", color: "#fff", border: "none", borderRadius: "8px", fontFamily: "Satoshi, sans-serif", padding: "10px" },
    },
    {
      id: "5",
      data: { 
        label: (
          <div className="flex items-center">
            <FileCode className="mr-2" size={18} />
            <span>Handling Contract</span>
          </div>
        ) 
      },
      position: { x: 300, y: 260 },
      style: { background: "#FFCC00", color: "#000", border: "none", borderRadius: "8px", fontFamily: "Satoshi, sans-serif", padding: "10px" },
    },
    {
      id: "8",
      type: "output",
      data: { 
        label: (
          <div className="flex items-center">
            <Repeat className="mr-2" size={18} />
            <span>Swap Contract</span>
          </div>
        ) 
      },
      position: { x: 175, y: 340 }, 
      style: { background: "#5856D6", color: "#fff", border: "none", borderRadius: "8px", fontFamily: "Satoshi, sans-serif", padding: "10px" },
    },
    {
      id: "group1",
      type: "groupNode",
      position: { x: 280, y: 0 },
      style: { width: 200, height: 320 },
      data: { width: 200, height: 320 },
    },
    {
      id: "horizontal-line",
      type: "custom",
      data: { label: "" },
      position: { x: 50, y: 150 }, 
      style: { 
        width: 450, 
        height: 1, 
        border: "none", 
        borderTop: "2px dashed #4A90E2",
        backgroundImage: "linear-gradient(to right, #4A90E2 50%, transparent 50%)",
        backgroundSize: "20px 1px",
        backgroundRepeat: "repeat-x"
      },
    },
    {
      id: "onchain-text",
      type: "custom",
      data: { label: "OnChain" },
      position: { x: 50, y: 160 }, 
      style: { 
        color: "#000", 
        fontFamily: "Satoshi, sans-serif",
        fontSize: "14px",
        fontWeight: "bold",
      },
    },
    {
      id: "prex-coverage",
      type: "custom",
      data: { label: "Prex Coverage" },
      position: { x: 360, y: -20 }, 
      style: { 
        color: "#FFD700", 
        fontFamily: "Satoshi, sans-serif",
        fontSize: "18px", 
        fontWeight: "bold", 
        backgroundColor: "rgba(0, 0, 0, 0.7)", 
        padding: "5px 10px", 
        borderRadius: "4px", 
      },
    },
    {
      id: "diagram-title-right",
      type: "custom",
      data: { label: "Prex: Like Stripe for Crypto" },
      position: { x: 100, y: -120 },
      
      style: { 
        color: "#000", 
        fontFamily: "Satoshi, sans-serif",
        fontSize: "24px", 
        fontWeight: "bold",
      },
    },
  ]

  const initialEdges: Edge[] = [
    { 
      id: "e1-3", 
      source: "1", 
      target: "3", 
      animated: true, 
      style: { stroke: "#000" },
      type: 'smoothstep',
    },
    { 
      id: "e2-3", 
      source: "2", 
      target: "3", 
      animated: true, 
      style: { stroke: "#000" },
      label: "Sign Order",
      labelStyle: { fill: "#000", fontWeight: 700, fontFamily: "Satoshi, sans-serif" },
      labelBgStyle: { fill: "rgba(255,255,255,0.7)", fillOpacity: 0.7 }
    },
    { 
      id: "e3-4", 
      source: "3", 
      target: "4", 
      animated: true, 
      style: { stroke: "#000" },
      label: "Pass Order",
      labelStyle: { fill: "#000", fontWeight: 700, fontFamily: "Satoshi, sans-serif" },
      labelBgStyle: { fill: "rgba(255,255,255,0.7)", fillOpacity: 0.7 }
    },
    { 
      id: "e4-5", 
      source: "4", 
      target: "5", 
      animated: true, 
      style: { stroke: "#000" },
    },
    { 
      id: "e5-8", 
      source: "5", 
      target: "8", 
      animated: true, 
      style: { stroke: "#000" },
      type: 'smoothstep',
    },
  ]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge({ ...params }, eds))
    },
    [setEdges]
  )

  const fitViewOptions: FitViewOptions = {
    padding: 0.2,
    includeHiddenNodes: true,
    minZoom: 0.2,
    maxZoom: 1,
  }

  return (
    <div className="relative w-full h-full min-h-[400px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
        fitView
        fitViewOptions={fitViewOptions}
        style={{ background: "#fff" }}
        nodeTypes={nodeTypes}
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnScroll={false}
        panOnDrag={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        minZoom={0.2}
        maxZoom={1}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#444" gap={12} size={1} />
      </ReactFlow>
      
    </div>
  )
}

interface NewsItem {
  id: number
  image: string
  title: string
  link?: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: "/images/news/news1.jpg",
    title: "香椎照葉"
  },
  {
    id: 2,
    image: "/images/news/image_FCR.png",
    title: "FC琉球の新ファンプラットフォーム「FCR COIN」にPrex採用",
    link: "/news/fc-ryukyu-partnership"
  },
  {
    id: 3,
    image: "/images/news/news3.jpg",
    title: "ETHGlobal Tokyo 2023 Prize受賞",
    link: "https://ethglobal.com/showcase/undefined-mc4u0"
  },
  {
    id: 4,
    image: "/images/news/news4.jpg",
    title: "FINOLAB「中央銀行デジタル通貨（CBDC）アイデアコンテスト」入賞",
    link: "https://prtimes.jp/main/html/rd/p/000000030.000049702.html"
  }
]

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full">
      <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {newsItems.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0 flex items-center justify-center bg-gray-100">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </a>
              ) : (
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronLeftIcon className="w-6 h-6 text-black" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronRightIcon className="w-6 h-6 text-black" />
        </button>
      </div>
    </div>
  )
}

const MissionStatement: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full flex items-center">
      <div className="space-y-8">
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <span className="text-gray-800">金融の</span>
          <br />
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              トレードオフ
            </span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 transform -skew-x-12" />
          </span>
          <br />
          <span className="text-gray-800">を解決する！</span>
        </h2>
      </div>
    </div>
  );
};

const TeamMember: React.FC<{ 
  name: string; 
  role: string; 
  description: React.ReactNode; 
  image: string; 
  twitter: string 
}> = ({ name, role, description, image, twitter }) => (
  <div className="flex flex-col items-center text-center">
    <Image 
      src={image} 
      alt={name} 
      width={96} 
      height={96} 
      className="rounded-full mb-2" 
    />
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm font-medium text-gray-600 mb-2">{role}</p>
    <p className="text-sm text-gray-500 mb-2">{description}</p>
    <a 
      href={twitter} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="mt-2 hover:opacity-80 transition-opacity"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-5 h-5 text-gray-600 fill-current"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
      </svg>
    </a>
  </div>
)

export function TelihaLandingPageComponent() {
  const [isMounted, setIsMounted] = useState(false)
  

  useEffect(() => {
    setIsMounted(true)
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-xl font-light tracking-wide font-inter">TELIHA</span>
            <span className="text-sm bg-white/10 px-2 py-1 rounded-md">∞.1</span>
          </div>
          <nav>
            <ul className="flex items-center justify-center space-x-6">
              <li>
                <Link 
                  href="/news" 
                  className="text-lg font-medium hover:text-gray-600 transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>News</span>
                  <span className="text-sm">(11月22日Updated)</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:pr-8">
              <MissionStatement />
            </div>
            
            <div className="flex items-center">
              <NewsSlider />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 md:py-16 bg-white/80 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <a 
                href="https://app.predy.finance/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block hover:opacity-90 transition-opacity"
              >
                <div className="h-[500px] md:h-[600px]">
                  {isMounted && <PredyDiagram />}
                </div>
              </a>
              <p className="mt-4 text-sm text-gray-600">
                Predy Protocolは、分散型金融（DeFi）の革新的なソリューションです。このプロトコルは、レンダー、トレーダー、ファシリテーター間の複雑な相互作用を可能にし、効率的な資金の流れと取引の実行を実現します。スマートコントラクトを活用することで、全かつ透明性の高い取引環境を提供します。
              </p>
            </div>
            <div>
              <a 
                href="https://www.prex0.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block hover:opacity-90 transition-opacity"
              >
                <div className="h-[500px] md:h-[600px]">
                  {isMounted && <PrexDiagram />}
                </div>
              </a>
              <p className="mt-4 text-sm text-gray-600">
                Prexは、次世代のSaaSソリューションとして設計されています。従来のEOA（外部所有アカウント）とAA（抽象アカウント）の両方をサポートし、ーザーに柔軟性を提供します。インテントオーダー、ファシリテーター、ハンドリングコントラクトを通じて、効率的で安全な取引プロセスを実現し、DeFiの利用をより簡単かつアクセスしやすいものにします。
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-16 bg-white/80 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-8 text-center">チームメンバー</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="部谷 修平"
              role="CEO"
              description={
                <>
                  九州大学在籍時未踏ース採択
                  <br />
                  スーパークリエター認定
                </>
              }
              image="/images/team/hiya.png"
              twitter="https://x.com/syuhei176"
            />
            <TeamMember
              name="伊部 紀昭"
              role="COO"
              description={
                <>
                  元インドネシア先物商品取引所
                  <br />
                  クリアリング機構取締役
                </>
              }
              image="/images/team/ibe.png"
              twitter="https://x.com/ibeibe__"
            />
            <TeamMember
              name="篠原 航"
              role="シニアエンジニア"
              description="著書「ブロックチェーンアプリケーション開発の教科書」等"
              image="/images/team/shino.png"
              twitter="https://x.com/shinanonozenji_"
            />
          </div>
        </div>
      </main>
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Building className="mr-2" size={20} />
                会社名
              </h3>
              <p className="text-gray-600">株式会社Teliha</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="mr-2" size={20} />
                所在地
              </h3>
              <div className="flex flex-col space-y-4">
                <p className="text-gray-600">〒810-0041 福岡県福岡市中央区大名2-6-11</p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://fukuoka-growth.next" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/images/location/fgn-logo.svg"
                      alt="Fukuoka Growth Next Logo"
                      width={280}
                      height={80}
                      className="object-contain"
                    />
                  </a>
                  <a 
                    href="https://x.com/fgn_fukuoka" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="w-8 h-8 text-gray-600 fill-current"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            © 2024 Teliha Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}