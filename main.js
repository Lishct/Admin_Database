// GymFlow Management System - Main JavaScript

// Initialize default members data
const defaultMembers = [
    {
        id: 1,
        name: "Maria Santos",
        email: "maria.santos@email.com",
        phone: "+63 912 345 6789",
        status: "active",
        joinDate: "2024-01-15",
        expiryDate: "2024-02-15",
        amount: 380,
        plan: "monthly"
    },
    {
        id: 2,
        name: "John Dela Cruz",
        email: "john.delacruz@email.com",
        phone: "+63 917 234 5678",
        status: "active",
        joinDate: "2024-01-20",
        expiryDate: "2024-02-20",
        amount: 380,
        plan: "monthly"
    },
    {
        id: 3,
        name: "Sarah Lim",
        email: "sarah.lim@email.com",
        phone: "+63 916 345 6789",
        status: "expiring",
        joinDate: "2024-01-10",
        expiryDate: "2024-01-25",
        amount: 380,
        plan: "monthly"
    },
    {
        id: 4,
        name: "Michael Torres",
        email: "michael.torres@email.com",
        phone: "+63 918 456 7890",
        status: "inactive",
        joinDate: "2023-12-01",
        expiryDate: "2024-01-01",
        amount: 380,
        plan: "monthly"
    },
    {
        id: 5,
        name: "Anna Rodriguez",
        email: "anna.rodriguez@email.com",
        phone: "+63 919 567 8901",
        status: "active",
        joinDate: "2024-01-25",
        expiryDate: "2024-02-25",
        amount: 1140,
        plan: "quarterly"
    },
    {
        id: 6,
        name: "David Chen",
        email: "david.chen@email.com",
        phone: "+63 915 678 9012",
        status: "active",
        joinDate: "2024-01-18",
        expiryDate: "2024-02-18",
        amount: 380,
        plan: "monthly"
    },
    {
        id: 7,
        name: "Jessica Wang",
        email: "jessica.wang@email.com",
        phone: "+63 913 789 0123",
        status: "active",
        joinDate: "2024-01-22",
        expiryDate: "2024-02-22",
        amount: 380,
        plan: "monthly"
    },
    {
        id: 8,
        name: "Robert Mendoza",
        email: "robert.mendoza@email.com",
        phone: "+63 920 890 1234",
        status: "expiring",
        joinDate: "2024-01-12",
        expiryDate: "2024-01-28",
        amount: 380,
        plan: "monthly"
    },
    {
        id: 9,
        name: "Lisa Garcia",
        email: "lisa.garcia@email.com",
        phone: "+63 914 901 2345",
        status: "active",
        joinDate: "2024-01-28",
        expiryDate: "2024-02-28",
        amount: 4200,
        plan: "annual"
    },
    {
        id: 10,
        name: "James Wilson",
        email: "james.wilson@email.com",
        phone: "+63 911 012 3456",
        status: "active",
        joinDate: "2024-01-30",
        expiryDate: "2024-02-30",
        amount: 380,
        plan: "monthly"
    },
    {
        id: 11,
        name: "Emily Tan",
        email: "emily.tan@email.com",
        phone: "+63 916 123 4567",
        status: "active",
        joinDate: "2024-01-16",
        expiryDate: "2024-02-16",
        amount: 380,
        plan: "monthly"
    },
    {
        id: 12,
        name: "Carlos Rivera",
        email: "carlos.rivera@email.com",
        phone: "+63 917 234 5678",
        status: "inactive",
        joinDate: "2023-11-15",
        expiryDate: "2023-12-15",
        amount: 380,
        plan: "monthly"
    },
    {
        id: 13,
        name: "Rachel Kim",
        email: "rachel.kim@email.com",
        phone: "+63 918 345 6789",
        status: "active",
        joinDate: "2024-01-24",
        expiryDate: "2024-02-24",
        amount: 1140,
        plan: "quarterly"
    },
    {
        id: 14,
        name: "Kevin Park",
        email: "kevin.park@email.com",
        phone: "+63 919 456 7890",
        status: "active",
        joinDate: "2024-01-26",
        expiryDate: "2024-02-26",
        amount: 380,
        plan: "monthly"
    },
    {
        id: 15,
        name: "Amanda Lopez",
        email: "amanda.lopez@email.com",
        phone: "+63 920 567 8901",
        status: "expiring",
        joinDate: "2024-01-14",
        expiryDate: "2024-01-30",
        amount: 380,
        plan: "monthly"
    },
    {
        id: 16,
        name: "Daniel Reyes",
        email: "daniel.reyes@email.com",
        phone: "+63 915 678 9012",
        status: "active",
        joinDate: "2024-01-19",
        expiryDate: "2024-02-19",
        amount: 380,
        plan: "monthly"
    },
    {
        id: 17,
        name: "Michelle Chang",
        email: "michelle.chang@email.com",
        phone: "+63 916 789 0123",
        status: "active",
        joinDate: "2024-01-21",
        expiryDate: "2024-02-21",
        amount: 1140,
        plan: "quarterly"
    },
    {
        id: 18,
        name: "Steven Martinez",
        email: "steven.martinez@email.com",
        phone: "+63 917 890 1234",
        status: "inactive",
        joinDate: "2023-10-10",
        expiryDate: "2023-11-10",
        amount: 380,
        plan: "monthly"
    },
    {
        id: 19,
        name: "Nicole Hernandez",
        email: "nicole.hernandez@email.com",
        phone: "+63 918 901 2345",
        status: "active",
        joinDate: "2024-01-27",
        expiryDate: "2024-02-27",
        amount: 380,
        plan: "monthly"
    },
    {
        id: 20,
        name: "Mark Davis",
        email: "mark.davis@email.com",
        phone: "+63 919 012 3456",
        status: "active",
        joinDate: "2024-01-23",
        expiryDate: "2024-02-23",
        amount: 4200,
        plan: "annual"
    }
];

// Initialize the system
function initializeDashboard() {
    // Check if members data exists in localStorage
    if (!localStorage.getItem('gymMembers')) {
        localStorage.setItem('gymMembers', JSON.stringify(defaultMembers));
    }
    
    // Update member statuses based on expiry dates
    updateMemberStatuses();
}

// Get all members from localStorage
function getMembers() {
    const members = JSON.parse(localStorage.getItem('gymMembers') || '[]');
    return members;
}

// Save members to localStorage
function saveMembers(members) {
    localStorage.setItem('gymMembers', JSON.stringify(members));
}

// Update member statuses based on expiry dates
function updateMemberStatuses() {
    const members = getMembers();
    const today = new Date();
    
    members.forEach(member => {
        const expiryDate = new Date(member.expiryDate);
        const diffTime = expiryDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays < 0) {
            member.status = 'inactive';
        } else if (diffDays <= 7) {
            member.status = 'expiring';
        } else if (member.status !== 'active') {
            member.status = 'active';
        }
    });
    
    saveMembers(members);
}

// Add new member
function addMember(memberData) {
    const members = getMembers();
    const newId = Math.max(...members.map(m => m.id), 0) + 1;
    
    const newMember = {
        id: newId,
        ...memberData,
        status: 'active',
        joinDate: new Date().toISOString().split('T')[0]
    };
    
    // Calculate expiry date based on plan
    const joinDate = new Date(newMember.joinDate);
    if (newMember.plan === 'monthly') {
        joinDate.setMonth(joinDate.getMonth() + 1);
    } else if (newMember.plan === 'quarterly') {
        joinDate.setMonth(joinDate.getMonth() + 3);
    } else if (newMember.plan === 'annual') {
        joinDate.setFullYear(joinDate.getFullYear() + 1);
    }
    newMember.expiryDate = joinDate.toISOString().split('T')[0];
    
    members.push(newMember);
    saveMembers(members);
    
    return newMember;
}

// Update existing member
function updateMember(id, updates) {
    const members = getMembers();
    const index = members.findIndex(m => m.id === parseInt(id));
    
    if (index !== -1) {
        members[index] = { ...members[index], ...updates };
        saveMembers(members);
        return members[index];
    }
    
    return null;
}

// Delete member
function deleteMember(id) {
    const members = getMembers();
    const filteredMembers = members.filter(m => m.id !== parseInt(id));
    saveMembers(filteredMembers);
    return true;
}

// Search and filter members
function filterMembers(searchTerm = '', statusFilter = '', planFilter = '') {
    const members = getMembers();
    
    return members.filter(member => {
        const matchesSearch = !searchTerm || 
            member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.email.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesStatus = !statusFilter || member.status === statusFilter;
        const matchesPlan = !planFilter || member.plan === planFilter;
        
        return matchesSearch && matchesStatus && matchesPlan;
    });
}

// Calculate revenue statistics
function calculateRevenue() {
    const members = getMembers();
    const activeMembers = members.filter(m => m.status === 'active');
    
    return {
        totalRevenue: activeMembers.reduce((sum, m) => sum + m.amount, 0),
        monthlyRecurring: activeMembers.filter(m => m.plan === 'monthly').length * 380,
        quarterlyRecurring: activeMembers.filter(m => m.plan === 'quarterly').length * 1140,
        annualRecurring: activeMembers.filter(m => m.plan === 'annual').length * 4200
    };
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP'
    }).format(amount);
}

// Format date
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Get status class for styling
function getStatusClass(status) {
    switch(status) {
        case 'active': return 'bg-green-100 text-green-800';
        case 'inactive': return 'bg-red-100 text-red-800';
        case 'expiring': return 'bg-amber-100 text-amber-800';
        default: return 'bg-gray-100 text-gray-800';
    }
}

// Get plan display name
function getPlanDisplayName(plan) {
    switch(plan) {
        case 'monthly': return 'Monthly (₱380)';
        case 'quarterly': return 'Quarterly (₱1,140)';
        case 'annual': return 'Annual (₱4,200)';
        default: return plan;
    }
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-medium ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    }`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Animate in
    anime({
        targets: toast,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutCubic'
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        anime({
            targets: toast,
            translateX: [0, 300],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInCubic',
            complete: () => {
                document.body.removeChild(toast);
            }
        });
    }, 3000);
}

// Export data to CSV
function exportToCSV(data) {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Status', 'Join Date', 'Expiry Date', 'Amount', 'Plan'];
    const csvContent = [
        headers.join(','),
        ...data.map(member => [
            member.id,
            `"${member.name}"`,
            member.email,
            member.phone,
            member.status,
            member.joinDate,
            member.expiryDate,
            member.amount,
            member.plan
        ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gym-members-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone format
function isValidPhone(phone) {
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

// Initialize tooltips
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(event) {
    const element = event.target;
    const text = element.getAttribute('data-tooltip');
    
    const tooltip = document.createElement('div');
    tooltip.className = 'absolute z-50 px-2 py-1 text-sm bg-gray-800 text-white rounded shadow-lg';
    tooltip.textContent = text;
    tooltip.style.bottom = '100%';
    tooltip.style.left = '50%';
    tooltip.style.transform = 'translateX(-50%)';
    tooltip.style.marginBottom = '5px';
    
    element.style.position = 'relative';
    element.appendChild(tooltip);
}

function hideTooltip(event) {
    const tooltip = event.target.querySelector('.absolute');
    if (tooltip) {
        tooltip.remove();
    }
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize the system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    initializeTooltips();
});

// Make functions available globally
window.GymFlow = {
    initializeDashboard,
    getMembers,
    saveMembers,
    addMember,
    updateMember,
    deleteMember,
    filterMembers,
    calculateRevenue,
    formatCurrency,
    formatDate,
    getStatusClass,
    getPlanDisplayName,
    showToast,
    exportToCSV,
    isValidEmail,
    isValidPhone
};