/**
 * 我的工具箱 - AI导航网站脚本
 * 功能：加载工具数据、分类筛选、搜索
 */

class AIToolsNavigator {
    constructor() {
        this.data = null;
        this.currentCategory = 'all';
        this.searchQuery = '';
        
        this.init();
    }
    
    async init() {
        await this.loadData();
        this.bindEvents();
        this.render();
    }
    
    async loadData() {
        try {
            const response = await fetch('data/tools.json');
            this.data = await response.json();
            
            // 更新页面元信息
            document.getElementById('siteName').textContent = this.data.meta.siteName;
            document.getElementById('siteDescription').textContent = this.data.meta.siteDescription;
            document.getElementById('authorName').textContent = this.data.meta.author;
            document.title = `${this.data.meta.siteName} - AI工具导航`;
        } catch (error) {
            console.error('加载数据失败:', error);
        }
    }
    
    bindEvents() {
        // 搜索输入
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.searchQuery = e.target.value.toLowerCase().trim();
            this.render();
        });
        
        // 搜索回车
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        });
        
        // 分类导航点击
        document.getElementById('categoryNav').addEventListener('click', (e) => {
            const btn = e.target.closest('.category-btn');
            if (btn) {
                this.currentCategory = btn.dataset.category;
                this.updateCategoryButtons();
                this.render();
            }
        });
    }
    
    updateCategoryButtons() {
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === this.currentCategory);
        });
    }
    
    getFilteredCategories() {
        if (!this.data) return [];
        
        return this.data.categories
            .filter(category => {
                // 分类过滤
                if (this.currentCategory !== 'all' && category.id !== this.currentCategory) {
                    return false;
                }
                
                // 搜索过滤：只要分类下有匹配的工具就显示
                if (this.searchQuery) {
                    const hasMatch = category.tools.some(tool => 
                        tool.name.toLowerCase().includes(this.searchQuery) ||
                        tool.description.toLowerCase().includes(this.searchQuery)
                    );
                    if (!hasMatch) return false;
                }
                
                return true;
            })
            .map(category => ({
                ...category,
                tools: this.searchQuery 
                    ? category.tools.filter(tool =>
                        tool.name.toLowerCase().includes(this.searchQuery) ||
                        tool.description.toLowerCase().includes(this.searchQuery)
                      )
                    : category.tools
            }));
    }
    
    renderCategoryNav() {
        const nav = document.getElementById('categoryNav');
        if (!this.data) return;
        
        // 计算每个分类的工具数量（考虑搜索过滤）
        const getCount = (categoryId) => {
            if (categoryId === 'all') {
                return this.data.categories.reduce((sum, cat) => sum + cat.tools.length, 0);
            }
            const category = this.data.categories.find(c => c.id === categoryId);
            return category ? category.tools.length : 0;
        };
        
        // 分类按钮HTML
        const categoryButtons = this.data.categories.map(category => {
            const count = getCount(category.id);
            return `
                <button class="category-btn" data-category="${category.id}">
                    <span>${category.icon} ${category.name}</span>
                    <span class="count">${count}</span>
                </button>
            `;
        }).join('');
        
        nav.innerHTML = `
            <button class="category-btn active" data-category="all">
                <span>🌐 全部</span>
                <span class="count">${getCount('all')}</span>
            </button>
            ${categoryButtons}
        `;
    }
    
    renderToolCard(tool) {
        // 使用emoji作为默认图标占位
        const defaultIcon = tool.icon || '🤖';
        
        return `
            <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-card">
                <div class="tool-icon">
                    ${tool.icon 
                        ? `<img src="${tool.icon}" alt="${tool.name}" onerror="this.parentElement.innerHTML='<span class=\\'tool-icon-emoji\\'>🤖</span>'">`
                        : `<span class="tool-icon-emoji">🤖</span>`
                    }
                </div>
                <div class="tool-info">
                    <div class="tool-name">${tool.name}</div>
                    <div class="tool-description">${tool.description}</div>
                </div>
                <span class="tool-arrow">→</span>
            </a>
        `;
    }
    
    renderTools() {
        const section = document.getElementById('toolsSection');
        const noResults = document.getElementById('noResults');
        const categories = this.getFilteredCategories();
        
        if (categories.length === 0) {
            section.innerHTML = '';
            noResults.style.display = 'block';
            return;
        }
        
        noResults.style.display = 'none';
        
        section.innerHTML = categories.map(category => `
            <div class="category-group" data-category="${category.id}">
                <div class="category-header">
                    <span class="category-icon">${category.icon}</span>
                    <h2 class="category-title">${category.name}</h2>
                    <span class="category-desc">${category.description}</span>
                </div>
                <div class="tools-grid">
                    ${category.tools.map(tool => this.renderToolCard(tool)).join('')}
                </div>
            </div>
        `).join('');
    }
    
    render() {
        this.renderCategoryNav();
        this.renderTools();
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    window.aiNavigator = new AIToolsNavigator();
});
