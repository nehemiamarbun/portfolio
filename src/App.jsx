import React, { useState, useEffect } from 'react';
import { 
  Home, User, Network, Briefcase, Award, Mail, MapPin, Linkedin, 
  ShieldCheck, Menu, X, Cpu, Terminal, Server, ChevronRight, 
  Globe, Cloud, Zap, Layers, Activity, Wifi, Radio, Code, Lock, Search, Database,
  ArrowRight, CheckCircle2,
} from 'lucide-react'

import profileImage from './assets/foto.jpg';

const App = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Data Project Lengkap (20 Items)
  const projects = [
    { id: 2, title: "DCI Internet Exchange Monitoring", cat: "Data Center", topo: "monitoring_ix", desc: "Monitoring traffic DCI-IX menggunakan Zabbix dan Grafana untuk menjaga SLA 99.99% bagi pelanggan Tier IV." },
    { id: 3, title: "Metro Dark Fiber Troubleshooting", cat: "Data Center", topo: "dark_fiber", desc: "Analisis dan perbaikan link metro dark fiber yang menghubungkan antar site data center menggunakan OTDR logic." },
    { id: 4, title: "QoS for Voice & Critical Apps", cat: "Core", topo: "qos_priority", desc: "Prioritas traffic Voice (RTP) menggunakan LLQ dan DSCP marking EF (Expedited Forwarding) di jaringan korporat." },
    { id: 5, title: "VLAN Segmentation HQ Office", cat: "Core", topo: "vlan_dist", desc: "Segmentasi L2/L3 untuk memisahkan traffic User, Server, dan Management dengan inter-VLAN routing terkontrol." },
    { id: 6, title: "ESXi & Proxmox Hypervisor Setup", cat: "Virtualization", topo: "virtualization", desc: "Instalasi dan konfigurasi dasar server managed HP dengan virtualisasi untuk efisiensi resource server client." },
    { id: 7, title: "BGP Internet Edge DCI Connect", cat: "Core", topo: "bgp_internet", desc: "Manajemen sesi eBGP dengan upstream ISP untuk memastikan rute internet optimal dan redundan." },
    { id: 8, title: "IP Address Management (IPAM)", cat: "Data Center", topo: "ipam_tree", desc: "Alokasi bandwidth dan manajemen rute IP internal yang presisi untuk ribuan rack di lingkungan DCI." },
    { id: 9, title: "Wireless Enterprise Ruckus/Ruijie", cat: "Wireless", topo: "wifi_enterprise", desc: "Deployment akses poin enterprise dengan kontroler terpusat untuk coverage gedung bertingkat." },
    { id: 10, title: "Site-to-Site VPN Internal Users", cat: "Security", topo: "vpn_tunnel", desc: "Konfigurasi gateway VPN untuk akses remote karyawan internal DCI ke sistem manajemen kritis secara aman." },
    { id: 12, title: "Core Switch Migration Nexus/H3C", cat: "Core", topo: "migration_core", desc: "Migrasi switch core dengan downtime minimal menggunakan teknologi IRF (H3C) atau vPC (Cisco)." },
    { id: 13, title: "IP Phone & Unified Comm System", cat: "Core", topo: "voip_system", desc: "Maintenance sistem telepon IP (Cisco, Ubiquity) yang terintegrasi dengan jaringan data internal." },
    { id: 14, title: "SD-WAN Path Selection Simulation", cat: "Automation", topo: "sdwan_logic", desc: "Simulasi pemilihan jalur otomatis berdasarkan jitter, latency, dan packet loss pada link WAN." },
    { id: 15, title: "Automation Netmiko Config Backup", cat: "Automation", topo: "python_script", desc: "Scripting python untuk backup konfigurasi perangkat multi-vendor secara terjadwal dan otomatis." },
    { id: 16, title: "Spine-Leaf L3 Data Center Fabric", cat: "Data Center", topo: "spine_leaf_full", desc: "Arsitektur Clos modern untuk skalabilitas trafik East-West di dalam data center tier IV." },
    { id: 17, title: "Access Control & CCTV Integration", cat: "Physical Security", topo: "security_sys", desc: "Integrasi sistem Milestone, Suprema, dan HID ke dalam segmen jaringan keamanan khusus." },
    { id: 18, title: "MPLS L3VPN Branch Connectivity", cat: "Core", topo: "mpls_vpn", desc: "Penyediaan konektivitas antar cabang menggunakan label switching untuk isolasi trafik pelanggan." },
    { id: 19, title: "Hybrid Cloud Direct Connect", cat: "Cloud", topo: "cloud_hybrid", desc: "Koneksi privat antara on-premise infrastructure ke public cloud AWS/Azure via BGP peering." },
    { id: 20, title: "VXLAN EVPN Control Plane", cat: "Data Center", topo: "vxlan_evpn", desc: "Implementasi overlay network untuk fleksibilitas workload antar rack tanpa batasan L2 tradisional." }
  ];

  // Helper Render Topologi - Custom SVG untuk SETIAP ID
  const renderTopology = (type) => {
    const emerald = "#3b82f6";
    const red = "#ef4444";
    const green = "#10b981";
    const amber = "#f59e0b";
    const slate = "#475569";
    const white = "#ffffff";

    switch(type) {
      case "fortinet_ha":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect x="120" y="40" width="60" height="30" rx="4" fill="none" stroke={red} strokeWidth="2" />
            <rect x="220" y="40" width="60" height="30" rx="4" fill="none" stroke={red} strokeWidth="2" />
            <path d="M180 55 L220 55" stroke={red} strokeWidth="1" strokeDasharray="4" />
            <text x="200" y="30" textAnchor="middle" fill={red} fontSize="10" fontWeight="bold">FG-HA Cluster</text>
            <line x1="150" y1="70" x2="100" y2="120" stroke={slate} />
            <line x1="250" y1="70" x2="300" y2="120" stroke={slate} />
            <rect x="80" y="120" width="240" height="15" rx="2" fill={slate} />
            <text x="200" y="150" textAnchor="middle" fill={green} fontSize="9">Internal Network / DMZ</text>
          </svg>
        );
      case "monitoring_ix":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect x="40" y="40" width="320" height="120" rx="8" fill="#0f172a" stroke={emerald} strokeWidth="1" />
            <polyline points="50,140 100,100 150,120 200,60 250,90 300,40 350,70" fill="none" stroke={green} strokeWidth="2" />
            <text x="60" y="60" fill={green} fontSize="10" fontWeight="bold">SLA 99.99% Monitoring</text>
            <circle cx="300" cy="40" r="4" fill={red} className="animate-pulse" />
          </svg>
        );
      case "dark_fiber":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect x="50" y="80" width="50" height="40" rx="4" fill="none" stroke={emerald} strokeWidth="2" />
            <rect x="300" y="80" width="50" height="40" rx="4" fill="none" stroke={emerald} strokeWidth="2" />
            <path d="M100 100 Q 200 10, 300 100" fill="none" stroke={amber} strokeWidth="3" />
            <path d="M100 110 Q 200 200, 300 110" fill="none" stroke={amber} strokeWidth="1" strokeDasharray="5" />
            <text x="200" y="105" textAnchor="middle" fill={white} fontSize="10">Metro Dark Fiber</text>
          </svg>
        );
      case "qos_priority":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect x="40" y="80" width="100" height="60" fill="#202020" rx="4" />
            <rect x="50" y="90" width="80" height="10" fill={red} rx="2" />
            <rect x="50" y="105" width="80" height="10" fill={emerald} rx="2" />
            <rect x="50" y="120" width="80" height="10" fill={slate} rx="2" />
            <line x1="140" y1="110" x2="250" y2="110" stroke={white} strokeWidth="2" />
            <rect x="260" y="90" width="100" height="40" fill={red} opacity="0.8" rx="4" />
            <text x="310" y="115" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">PRIORITY (VOIP)</text>
          </svg>
        );
      case "vlan_dist":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect x="170" y="30" width="60" height="30" rx="2" fill="none" stroke={white} />
            <line x1="200" y1="60" x2="100" y2="130" stroke={slate} />
            <line x1="200" y1="60" x2="300" y2="130" stroke={slate} />
            <rect x="70" y="130" width="60" height="30" rx="2" fill={emerald} opacity="0.3" stroke={emerald} />
            <rect x="270" y="130" width="60" height="30" rx="2" fill={amber} opacity="0.3" stroke={amber} />
            <text x="100" y="175" textAnchor="middle" fill={white} fontSize="8">VLAN 10 (Sales)</text>
            <text x="300" y="175" textAnchor="middle" fill={white} fontSize="8">VLAN 20 (IT)</text>
          </svg>
        );
      case "virtualization":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect x="50" y="140" width="300" height="30" fill={slate} rx="4" />
            <text x="200" y="160" textAnchor="middle" fill="white" fontSize="10">Bare Metal (HP Gen10)</text>
            <rect x="50" y="100" width="300" height="30" fill={emerald} opacity="0.4" rx="4" />
            <text x="200" y="120" textAnchor="middle" fill="white" fontSize="10">Hypervisor (ESXi/Proxmox)</text>
            <rect x="70" y="40" width="50" height="40" rx="2" fill="none" stroke={slate} />
            <rect x="175" y="40" width="50" height="40" rx="2" fill="none" stroke={slate} />
            <rect x="280" y="40" width="50" height="40" rx="2" fill="none" stroke={slate} />
            <text x="200" y="30" textAnchor="middle" fill={slate} fontSize="8">Virtual Machines</text>
          </svg>
        );
      case "bgp_internet":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <Cloud x="150" y="30" size={100} className="text-zinc-800" />
            <rect x="50" y="140" width="80" height="40" rx="4" fill="none" stroke={red} />
            <text x="90" y="165" textAnchor="middle" fill="white" fontSize="10">ISP-A</text>
            <rect x="270" y="140" width="80" height="40" rx="4" fill="none" stroke={red} />
            <text x="310" y="165" textAnchor="middle" fill="white" fontSize="10">ISP-B</text>
            <path d="M130 150 L270 150" stroke={amber} strokeDasharray="4" />
            <text x="200" y="140" textAnchor="middle" fill={amber} fontSize="8">iBGP Peering</text>
          </svg>
        );
      case "ipam_tree":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect x="150" y="20" width="100" height="25" rx="4" fill={emerald} opacity="0.2" stroke={emerald} />
            <text x="200" y="37" textAnchor="middle" fill="white" fontSize="9">10.0.0.0/8</text>
            <line x1="200" y1="45" x2="100" y2="80" stroke={slate} />
            <line x1="200" y1="45" x2="300" y2="80" stroke={slate} />
            <rect x="60" y="80" width="80" height="20" rx="2" fill={slate} />
            <rect x="260" y="80" width="80" height="20" rx="2" fill={slate} />
            <text x="100" y="120" textAnchor="middle" fill={slate} fontSize="8">10.1.0.0/16 (DC)</text>
            <text x="300" y="120" textAnchor="middle" fill={slate} fontSize="8">10.2.0.0/16 (Office)</text>
          </svg>
        );
      case "wifi_enterprise":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <circle cx="200" cy="50" r="25" fill="none" stroke={emerald} strokeWidth="2" />
            <text x="200" y="54" textAnchor="middle" fill="white" fontSize="10">WLC</text>
            <Wifi x="80" y="120" size={30} className="text-green-500" />
            <Wifi x="200" y="120" size={30} className="text-green-500" />
            <Wifi x="320" y="120" size={30} className="text-green-500" />
            <line x1="200" y1="75" x2="100" y2="120" stroke={slate} strokeDasharray="3" />
            <line x1="200" y1="75" x2="215" y2="120" stroke={slate} strokeDasharray="3" />
            <line x1="200" y1="75" x2="330" y2="120" stroke={slate} strokeDasharray="3" />
          </svg>
        );
      case "vpn_tunnel":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect x="50" y="80" width="60" height="40" rx="4" fill="none" stroke={emerald} />
            <rect x="290" y="80" width="60" height="40" rx="4" fill="none" stroke={emerald} />
            <path d="M110 100 L290 100" stroke={red} strokeWidth="8" opacity="0.2" />
            <path d="M110 100 L290 100" stroke={red} strokeWidth="2" strokeDasharray="10" />
            <Lock x="185" y="75" size={30} className="text-red-500" />
            <text x="200" y="125" textAnchor="middle" fill={red} fontSize="10" fontWeight="bold">IPsec Tunnel (AES-256)</text>
          </svg>
        );
      case "nginx_proxy":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <Globe x="40" y="85" size={30} className="text-emerald-300" />
            <line x1="80" y1="100" x2="160" y2="100" stroke={slate} markerEnd="url(#arrow)" />
            <rect x="170" y="70" width="60" height="60" rx="4" fill={green} opacity="0.2" stroke={green} />
            <text x="200" y="105" textAnchor="middle" fill={white} fontSize="8">NGINX</text>
            <line x1="230" y1="100" x2="310" y2="100" stroke={slate} />
            <Server x="320" y="85" size={30} className="text-slate-500" />
            <text x="200" y="150" textAnchor="middle" fill={green} fontSize="9">Reverse Proxy & WAF Layer</text>
          </svg>
        );
      case "migration_core":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect x="130" y="50" width="140" height="30" rx="4" fill={slate} opacity="0.5" />
            <text x="200" y="40" textAnchor="middle" fill={slate} fontSize="9">Old Infrastructure</text>
            <ArrowRight x="190" y="85" size={20} className="text-emerald-300" />
            <rect x="130" y="120" width="140" height="40" rx="4" fill="none" stroke={emerald} strokeWidth="2" />
            <text x="200" y="145" textAnchor="middle" fill={white} fontSize="10" fontWeight="bold">New Core (vPC/IRF)</text>
          </svg>
        );
      case "voip_system":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect x="150" y="30" width="100" height="40" rx="4" fill="none" stroke={emerald} />
            <text x="200" y="55" textAnchor="middle" fill="white" fontSize="10">IP-PBX Server</text>
            {[80, 200, 320].map(x => (
              <g key={x}>
                <line x1="200" y1="70" x2={x} y2="130" stroke={slate} />
                <rect x={x-20} y="130" width="40" height="25" rx="2" fill={slate} />
                <Phone x={x-10} y="135" size={15} className="text-white opacity-50" />
              </g>
            ))}
          </svg>
        );
      case "sdwan_logic":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect x="40" y="80" width="60" height="40" rx="4" fill="none" stroke={emerald} />
            <path d="M100 90 L300 50" stroke={green} strokeWidth="2" />
            <text x="200" y="45" textAnchor="middle" fill={green} fontSize="8">Path 1: Low Latency (Fiber)</text>
            <path d="M100 110 L300 150" stroke={amber} strokeWidth="2" strokeDasharray="4" />
            <text x="200" y="170" textAnchor="middle" fill={amber} fontSize="8">Path 2: Backup (LTE/VSAT)</text>
            <rect x="300" y="80" width="60" height="40" rx="4" fill="none" stroke={emerald} />
            <Activity x="185" y="85" size={30} className="text-emerald-300" />
          </svg>
        );
      case "python_script":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect x="50" y="40" width="150" height="120" rx="4" fill="#0f172a" stroke={green} />
            <text x="60" y="65" fill={green} fontSize="8" fontFamily="monospace">for device in inventory:</text>
            <text x="70" y="80" fill={emerald} fontSize="8" fontFamily="monospace">  backup_config(device)</text>
            <text x="70" y="95" fill={white} fontSize="8" fontFamily="monospace">  save_to_git()</text>
            <line x1="200" y1="100" x2="300" y2="100" stroke={green} strokeDasharray="4" markerEnd="url(#arrow)" />
            <Database x="310" y="85" size={30} className="text-emerald-300" />
          </svg>
        );
      case "spine_leaf_full":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect x="130" y="30" width="60" height="20" rx="2" fill="none" stroke={emerald} />
            <rect x="210" y="30" width="60" height="20" rx="2" fill="none" stroke={emerald} />
            {[60, 150, 240, 330].map(x => (
              <g key={x}>
                <rect x={x-20} y="110" width="40" height="15" rx="2" fill="none" stroke={slate} />
                <line x1="160" y1="50" x2={x} y2="110" stroke={slate} opacity="0.3" />
                <line x1="240" y1="50" x2={x} y2="110" stroke={slate} opacity="0.3" />
              </g>
            ))}
            <text x="200" y="170" textAnchor="middle" fill={slate} fontSize="9">SPINE-LEAF ARCHITECTURE (L3)</text>
          </svg>
        );
      case "security_sys":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect x="150" y="30" width="100" height="40" rx="4" fill="none" stroke={red} />
            <text x="200" y="55" textAnchor="middle" fill="white" fontSize="10">Security V-LAN</text>
            <Activity x="80" y="120" size={30} className="text-slate-500" />
            <Lock x="185" y="120" size={30} className="text-slate-500" />
            <Database x="290" y="120" size={30} className="text-slate-500" />
            <text x="100" y="165" textAnchor="middle" fill={slate} fontSize="8">CCTV</text>
            <text x="200" y="165" textAnchor="middle" fill={slate} fontSize="8">Access Control</text>
            <text x="310" y="165" textAnchor="middle" fill={slate} fontSize="8">Key Management</text>
          </svg>
        );
      case "mpls_vpn":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <Cloud x="140" y="50" size={120} className="text-zinc-800" />
            <text x="200" y="115" textAnchor="middle" fill={emerald} fontSize="12" fontWeight="bold">MPLS CORE</text>
            <rect x="40" y="140" width="60" height="30" rx="4" fill="none" stroke={slate} />
            <rect x="300" y="140" width="60" height="30" rx="4" fill="none" stroke={slate} />
            <path d="M70 140 Q 200 50, 330 140" fill="none" stroke={emerald} strokeWidth="2" strokeDasharray="5" />
            <text x="200" y="80" textAnchor="middle" fill={emerald} fontSize="8">VRF: CUSTOMER_A</text>
          </svg>
        );
      case "cloud_hybrid":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect x="40" y="60" width="100" height="80" rx="8" fill="#202020" />
            <text x="90" y="105" textAnchor="middle" fill="white" fontSize="10">ON-PREM DC</text>
            <line x1="140" y1="100" x2="260" y2="100" stroke={amber} strokeWidth="3" />
            <text x="200" y="90" textAnchor="middle" fill={amber} fontSize="8">Direct Connect</text>
            <Cloud x="260" y="60" size={100} className="text-emerald-300" />
            <text x="310" y="115" textAnchor="middle" fill="white" fontSize="10">AWS/Azure</text>
          </svg>
        );
      case "vxlan_evpn":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect x="50" y="120" width="300" height="15" fill={slate} />
            <rect x="80" y="50" width="40" height="30" rx="2" fill="none" stroke={emerald} />
            <rect x="280" y="50" width="40" height="30" rx="2" fill="none" stroke={emerald} />
            <path d="M100 50 Q 200 -20, 300 50" fill="none" stroke={emerald} strokeWidth="4" opacity="0.2" />
            <text x="200" y="25" textAnchor="middle" fill={emerald} fontSize="10" fontWeight="bold">VNI Tunnel Overlay</text>
            <line x1="100" y1="80" x2="100" y2="120" stroke={slate} />
            <line x1="300" y1="80" x2="300" y2="120" stroke={slate} />
            <text x="200" y="150" textAnchor="middle" fill={slate} fontSize="9">Underlay Network (OSPF/BGP)</text>
          </svg>
        );
      default:
        // Ini tidak akan terpanggil karena 20 id sudah dicover
        return null;
    }
  };

  // Komponen Ikon buat VOIP
  const Phone = ({ ...props }) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const renderContent = () => {
    const animationClass = animate ? "animate-in fade-in slide-in-from-bottom-4 duration-500" : "";

    switch (activeTab) {

      case 'profile':
  return (
    <div className={`space-y-12 ${animationClass}`}>

      {/* HERO SECTION */}
<div className="relative group">
  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-indigo-500 rounded-2xl blur opacity-20 transition duration-1000"></div>

  <div className="relative bg-[#262626]/80 backdrop-blur-sm border border-zinc-800 p-6 md:p-12 rounded-2xl">

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

      {/* LEFT CONTENT */}
      <div className="lg:col-span-2 flex flex-col h-full justify-between">

        <div>

          <div className="mb-6">
            <p className="text-emerald-400 text-sm tracking-[0.3em] uppercase mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl xl:text-6xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent leading-tight">
              Ir. Nehemia Cristiano Marbun
            </h1>

            <p className="mt-4 text-xl md:text-2xl text-emerald-300 font-medium tracking-tight">
              Professional Network Engineer | Network Specialist
            </p>

            <p className="text-slate-500 text-sm mt-2 font-mono">
              Experience: 3+ Years in Networking & Data Center Infrastructure
            </p>
          </div>

          <p className="text-slate-400 leading-relaxed max-w-3xl text-lg italic border-l-2 border-emerald-600 pl-6">
            Passionate Network Engineer specializing in scalable infrastructure,
            network resilience, enterprise connectivity, SD-WAN architecture,
            and mission-critical data center operations.
          </p>

          
        </div>

        {/* CORE SPECIALIZATION */}
        <div className="mt-10 bg-slate-500/10 border border-emerald-600/20 p-8 rounded-[2rem] hover:border-emerald-500/30 transition-all">

          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-4">
            <ShieldCheck className="text-emerald-300" />
            Core Specialization
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Enterprise Network Design",
              "Infrastructure Reliability",
              "Security & Segmentation",
              "Automation & Monitoring"
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 bg-[#2a2a2a]/50 rounded-2xl border border-zinc-800"
              >
                <CheckCircle2
                  size={16}
                  className="text-emerald-300"
                />

                <span className="text-sm text-slate-300 font-bold">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-6 border-t border-zinc-800 pt-8">

            <div className="flex items-center gap-2 text-slate-400 text-sm hover:text-emerald-300 transition-colors">
              <MapPin size={22} className="text-emerald-300" />
              Karawang Barat / Jakarta
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-sm hover:text-emerald-300 transition-colors">
              <Mail size={22} className="text-emerald-300" />
              nehemiamarbun00@gmail.com
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-sm hover:text-emerald-300 transition-colors">
              <Linkedin size={22} className="text-emerald-300" />
              nehemia-marbun
            </div>

          </div>
      </div>

      {/* RIGHT PROFILE */}
      <div className="space-y-6">

        <div className="bg-[#2a2a2a]/70 border border-zinc-800 p-8 rounded-[2rem] hover:-translate-y-1 hover:border-emerald-500/30 transition-all flex flex-col items-center text-center">

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-2xl"></div>

            <img
              src={profileImage}
              alt="Nehemia Cristiano Marbun"
              className="relative w-52 h-52 rounded-full object-cover border border-emerald-500/20 shadow-2xl shadow-emerald-500/10"
            />
          </div>

          <h4 className="text-2xl font-bold text-white mt-8 mb-2 tracking-tighter">
            Nehemia Cristiano Marbun
          </h4>

          <p className="text-xs text-emerald-300 font-bold uppercase tracking-[0.3em] mb-8">
            Sr. Network Engineer
          </p>

          <div className="w-full space-y-4">

            <div className="p-4 bg-[#232323] rounded-2xl border border-zinc-800 text-left">
              <p className="text-[9px] font-bold text-slate-600 uppercase mb-2 tracking-widest text-2xl md:text-2xl xl:text-2xl">
                Education
              </p>

              <p className="text-xs text-white font-bold">
                Institut Teknologi Indonesia 
              </p>

              <p className="text-sm text-slate-500 italic">
                IPK 3.83 - Professional Engineer Program
              </p>

              <p className="text-xs text-white font-bold">
                Universitas Methodist Indonesia
              </p>
              <p className="text-sm text-slate-500 italic">
                IPK 3.31 - Informatic Engineering
              </p>

              </div>


          </div>
        </div>
      </div>

    </div>
  </div>
</div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="bg-[#262626]/50 border border-zinc-800 p-6 rounded-xl flex items-center gap-4 group hover:border-slate-600/50 transition-all cursor-default">
          <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-300">
            <Cpu size={24} />
          </div>

          <div>
            <div className="text-xl font-bold text-white">
              Multi-Vendor Expertise
            </div>

            <div className="text-xs uppercase tracking-wider text-slate-500">
              Cisco, Juniper, Fortinet, Mikrotik, Ruijie, H3C
            </div>
          </div>
        </div>

        <div className="bg-[#262626]/50 border border-zinc-800 p-6 rounded-xl flex items-center gap-4 group hover:border-slate-600/50 transition-all cursor-default">
          <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-300">
            <Award size={24} />
          </div>

          <div>
            <div className="text-xl font-bold text-white">
              5+ Certified Professional
            </div>

            <div className="text-xs uppercase tracking-wider text-slate-500">
              CCNA, JNCIA, MTCNA, RCNA, BNSP
            </div>
          </div>
        </div>

        <div className="bg-[#262626]/50 border border-zinc-800 p-6 rounded-xl flex items-center gap-4 group hover:border-slate-600/50 transition-all cursor-default">
          <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-300">
            <Briefcase size={24} />
          </div>

          <div>
            <div className="text-xl font-bold text-white">
              3+ Years Experience
            </div>

            <div className="text-xs uppercase tracking-wider text-slate-500">
              Professional Enterprise Networking
            </div>
          </div>
        </div>

        <div className="bg-[#262626]/50 border border-zinc-800 p-6 rounded-xl flex items-center gap-4 group hover:border-slate-600/50 transition-all cursor-default">
          <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-300">
            <Activity size={24} />
          </div>

          <div>
            <div className="text-xl font-bold text-white">
              99.99% SLA
            </div>

            <div className="text-xs uppercase tracking-wider text-slate-500">
              Mission-Critical Infrastructure
            </div>
          </div>
        </div>
      </div>
    </div>
  );
      case 'experience':
        return (
          <div className={`space-y-12 ${animationClass}`}>
            <h2 className="text-5xl font-bold text-white tracking-tighter">CAREER <span className="text-emerald-600">STATIONS</span></h2>
            <div className="space-y-8">
              {[
                {
                  company: "PT. Maven Integra Solusindo",
                  role: "Network Engineer",
                  period: "2026 - Present",
                  details: [
                    "Designing and implementing enterprise routing infrastructure.",
                    "Deploying SD-WAN infrastructure for enterprise branch connectivity.",
                    "Managing SD-DC and SDN-based network architecture for scalable operations.",
                    "Troubleshooting multi-vendor IP backbone and data center environments."
                  ]
                },
                {
                  company: "PT. DCI Indonesia, TBK",
                  role: "Sr. Network Operations Engineer",
                  period: "2024 - 2026",
                  details: [
                    "Managing L1/L2 mission-critical network for Tier IV DC clients.",
                    "SLA monitoring using PRTG, Zabbix, and Grafana visualization.",
                    "Executing MOP (Method of Procedure) for network migrations.",
                    "Troubleshooting Metro Dark Fiber and DCI-IX traffic issues."
                  ]
                },
                {
                  company: "PT. Cyberindo Aditama (CBN)",
                  role: "Network & Service Delivery",
                  period: "2023 - 2024",
                  details: [
                    "Lead end-to-end service delivery for corporate enterprise clients.",
                    "Advanced configuration of MikroTik and Ruijie routing stacks.",
                    "On-site infrastructure audit and capacity planning."
                  ]
                },
                {
                  company: "PT. Pasific Cipta Nusantara",
                  role: "Network & System Engineer",
                  period: "2023",
                  details: [
                    "Deploying Fortinet Security Fabric for banking sectors (Bank BRI).",
                    "Virtualization management with VMware ESXi and Proxmox.",
                    "Instructor for Junior Engineers in Firewall configuration."
                  ]
                }
              ].map((exp, i) => (
                <div key={i} className="group">
                  <div className="bg-[#262626] border border-zinc-800 p-10 rounded-[3rem] hover:border-emerald-600/30 transition-all shadow-xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
                      <div>
                        <h3 className="text-3xl font-bold text-white tracking-tighter uppercase group-hover:text-emerald-300 transition-colors">{exp.company}</h3>
                        <p className="text-emerald-300 font-bold text-xs uppercase tracking-[0.3em] mt-1">{exp.role}</p>
                      </div>
                      <div className="px-6 py-2 bg-[#2a2a2a] border border-zinc-800 rounded-full text-sm font-bold text-slate-500 uppercase tracking-[0.3em]">{exp.period}</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {exp.details.map((detail, j) => (
                         <div key={j} className="flex gap-4 text-slate-400 text-sm leading-relaxed">
                            <span className="text-emerald-600 font-bold">/</span> {detail}
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className={`space-y-12 ${animationClass}`}>
            <div className="flex items-end justify-between">
              <h2 className="text-5xl font-bold text-white tracking-tighter">PROJECT <span className="text-emerald-600">ARTIFACTS</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj) => (
                <div key={proj.id} className="bg-[#262626]/40 backdrop-blur-sm border border-zinc-800 rounded-[3rem] overflow-hidden group hover:border-slate-600/40 transition-all flex flex-col shadow-xl">
                  {/* Bagian Visual Topologi - Tidak Ada Default */}
                  <div className="h-64 bg-[#050b1a] p-6 relative flex items-center justify-center border-b border-zinc-800/50">
                     <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#202020_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                     {renderTopology(proj.topo)}
                     
                  </div>
                  
                  <div className="p-10 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                       <span className="px-4 py-1.5 bg-emerald-600/10 text-emerald-300 text-sm font-bold uppercase tracking-widest rounded-xl border border-emerald-600/20">{proj.cat}</span>
                       <Activity size={16} className="text-zinc-800 group-hover:text-emerald-600 transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight leading-none group-hover:text-emerald-300 transition-colors">{proj.title}</h3>
                    <p className="text-slate-400 text-base leading-relaxed mb-8 flex-1 italic font-light">
                      {proj.desc}
                    </p>
                    <div className="flex items-center gap-3 pt-6 border-t border-zinc-800/50">
                       <p className="text-sm font-bold text-slate-700 uppercase tracking-[0.12em]">Validated Infrastructure Logic</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className={`space-y-16 ${animationClass}`}>
            <section>
              <h2 className="text-5xl font-bold text-white tracking-tighter mb-12">TECH <span className="text-emerald-600">ECOSYSTEM</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Network Core", items: ["BGP Traffic Eng", "OSPF Multi-Area", "MPLS L3VPN", "VXLAN / EVPN"] },
                  { title: "Security Fabric", items: ["FortiGate HA", "IPsec VPN", "NGINX Proxy", "Firewall ACL"] },
                  { title: "Monitoring", items: ["Zabbix / Grafana", "PRTG Network Monitoring", "SLA Calculation", "OTDR Analysis"] },
                  { title: "Automation", items: ["Python Netmiko", "Ansible Basics", "Linux Admin", "Virtualization"] }
                ].map((group, i) => (
                  <div key={i} className="p-6 bg-[#262626] border border-zinc-800 rounded-[2.5rem] hover:-translate-y-1 hover:border-emerald-500/30 hover:border-emerald-600/20 transition-all">
                     <h4 className="text-emerald-300 font-bold text-sm uppercase tracking-[0.3em] mb-8">/ {group.title}</h4>
                     <ul className="space-y-4">
                        {group.items.map(s => (
                          <li key={s} className="text-slate-300 text-sm font-medium flex items-center gap-2">
                             <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> {s}
                          </li>
                        ))}
                     </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-5xl font-bold text-white tracking-tighter mb-12">CERTIFIED <span className="text-emerald-600">EXPERTISE</span></h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 {[
                   { name: "MTCNA", vendor: "MikroTik" },
                   { name: "JNCIA", vendor: "Juniper" },
                   { name: "RCNA", vendor: "Ruijie" },
                   { name: "JNA", vendor: "BNSP" },
                   { name: "CCNA", vendor: "Cisco" },
                   { name: "RUCKUS RSP 100", vendor: "Industrial" },
                 ].map((cert, i) => (
                   <div key={i} className="bg-[#262626] border border-zinc-800 p-6 rounded-[2rem] text-center group hover:bg-slate-500/10 transition-all">
                      <ShieldCheck className="mx-auto text-slate-700 group-hover:text-emerald-600 mb-6 transition-colors" size={40} />
                      <p className="text-lg font-bold text-white uppercase leading-none mb-1">{cert.name}</p>
                      <p className="text-sm text-slate-600 uppercase font-bold tracking-widest">{cert.vendor}</p>
                   </div>
                 ))}
              </div>
            </section>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#202020] text-slate-300 flex flex-col md:flex-row font-sans selection:bg-emerald-600 selection:text-white antialiased overflow-x-hidden">
      
      {/* Sidebar Mobile */}
      <div className="md:hidden flex items-center justify-between p-6 bg-[#2a2a2a]/80 backdrop-blur-xl border-b border-zinc-900 sticky top-0 z-50">
        <div className="font-bold text-2xl tracking-tighter text-white">Nehemia Cristiano Marbun</div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Main Sidebar Navigation */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-40 w-72 lg:w-80 bg-[#2a2a2a] border-r border-zinc-900 transform transition-transform duration-500 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        flex flex-col shadow-2xl
      `}>
        <div className="p-12 hidden md:block">
           <div className="flex flex-col">
              <span className="font-bold text-3xl tracking-tighter text-white leading-none">Nehemia Cristiano Marbun</span>
              <span className="text-[8px] font-bold text-emerald-600 tracking-[0.5em] uppercase mt-2">Senior Network Engineer</span>
           </div>
        </div>

        <nav className="flex-1 px-8 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`
                w-full flex items-center gap-5 px-6 py-4 rounded-2xl transition-all duration-300 border border-transparent
                ${activeTab === item.id 
                  ? 'bg-emerald-600 text-white shadow-[0_20px_40px_rgba(37,99,235,0.2)] border-emerald-400/50' 
                  : 'text-slate-600 hover:text-slate-200 hover:bg-[#262626]/50'}
              `}
            >
              {item.icon}
              <span className="font-bold text-sm uppercase tracking-[0.3em]">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-12 border-t border-zinc-900">
           <div className="flex gap-4 mb-8">
              <a href="https://www.linkedin.com/in/nehemia-cristiano-marbun-b484621b7/" className="w-10 h-10 flex items-center justify-center bg-[#262626] rounded-xl text-slate-500 hover:text-emerald-300 transition-all border border-zinc-800"><Linkedin size={22}/></a>
              <a href="mailto:nehemiamarbun00@gmail.com" className="w-10 h-10 flex items-center justify-center bg-[#262626] rounded-xl text-slate-500 hover:text-emerald-300 transition-all border border-zinc-800"><Mail size={22}/></a>
           </div>
           <p className="text-[9px] text-zinc-300 font-mono tracking-[0.12em] uppercase"> © 2026 Nehemia Cristiano Marbun</p>
        </div>
      </aside>

      {/* Main Container */}
      <main className="flex-1 p-4 md:p-6 lg:p-12 overflow-y-auto bg-[#2a2a2a] relative min-h-screen">
        <div className="w-full max-w-screen-2xl mx-auto relative z-10 pb-10">
          {renderContent()}
        </div>
        
        {/* Background Gradients */}
        <div className="fixed top-0 right-0 w-[40rem] h-[40rem] bg-slate-500/10 blur-[160px] pointer-events-none"></div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-from-bottom-4 { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-in { animation: slide-in-from-bottom-4 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #202020; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #3b82f6; }
      `}} />
    </div>
  );
};

const navItems = [
  { id: 'profile', label: 'Profile', icon: <User size={22} /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase size={22} /> },
  { id: 'projects', label: 'Projects', icon: <Network size={22} /> },
  { id: 'skills', label: 'Skills', icon: <Award size={22} /> },
];

export default App;