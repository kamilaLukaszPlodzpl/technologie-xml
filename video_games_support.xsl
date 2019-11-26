<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xsL="http://www.w3.org/1999/XSL/Transform"
>
<xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes"/>

    <xsl:key name="keyPEGI" match="*[name()='pegiDescriptor']" use="@id" />
    <xsl:key name="keyGenre" match="*[name()='genre']" use="@id" />
    <xsl:key name="keyPlatform" match="*[name()='platform']" use="@id" />

    <xsl:template match="/">
        <xsl:element name="root">
            <xsl:call-template name="raport"/>
            <xsl:call-template name="stats"/>
        </xsl:element>
    </xsl:template>

    <!-- Statystyki -->
    <xsl:template name="stats">
        <xsl:element name="stats">
            <xsl:element name="gameCount">
                <xsl:value-of select="count(//*[name()='games']/*[name()='game'])"/>
            </xsl:element>
            <xsl:element name="platformCount">
                <xsl:value-of select="count(//*[name()='platforms']/*[name()='platform'])"/>
            </xsl:element>
            <xsl:element name="genreCount">
                <xsl:value-of select="count(//*[name()='genres']/*[name()='genre'])"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <!-- Raport -->
    <xsl:template name="raport">
        <xsl:element name="raport">
            <!-- Przepisanie opisu -->
            <xsl:element name="description">
                <xsl:value-of select="//*[name()='description']"/>
            </xsl:element>
            <!-- Lista gier -->
            <xsl:element name="gameList">
                <xsl:apply-templates select="//*[name()='games']/*"/>
            </xsl:element>
            <!-- Lista autorów listy -->
            <xsl:element name="authors">
                <xsl:apply-templates select="//*[name()='authors']/*"/><!-- TODO: Implement template -->
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <!-- Lista gier, wybieramy dzieci elementu games -->
    <xsl:template match="//*[name()='games']/*">
        <xsl:element name="game">
            <xsl:apply-templates select="*[name()='title']"/>
            <xsl:apply-templates select="*[name()='price']"/>
            <xsl:apply-templates select="*[name()='relatedGenre']"/>
            <xsl:apply-templates select="*[name()= 'releaseDate']"/>
            <xsl:apply-templates select="*[name()='developer']"/>
            <xsl:apply-templates select="*[name()='relatedPlatforms']"/>
            <xsl:apply-templates select="*[name()='publisher']"/>
            <xsl:apply-templates select="*[name()='rating']"/>
            <xsl:apply-templates select="*[name()='PEGI']"/>
            <xsl:apply-templates select="*[name()='coverArt']"/>
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()= 'title']">
        <xsl:element name="title">
            <xsl:attribute name="language">
                <xsl:value-of select="@language"/>
            </xsl:attribute>
            <xsl:value-of select="."/>
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name() = 'price']">
        <xsl:element name="price">
            <xsl:value-of select="concat(.,' ',@currency)"/>
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='relatedGenre']">
        <xsl:element name="genre">
            <xsl:variable name="id" select="@id"/>
            <xsl:value-of select="key('keyGenre',$id)"/>
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()= 'releaseDate']">
        <xsl:element name="releaseDate">
            <xsl:variable name="day" select="*[name() = 'day']"/>
            <xsl:variable name="month" select="*[name() = 'month']"/>
            <xsl:variable name="year" select="*[name() = 'year']"/>
            <xsl:value-of select="concat($day,' ',$month,' ',$year)"/>
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='developer']">
        <xsl:element name="developer">
            <xsl:value-of select="."/>
        </xsl:element>
    </xsl:template>
    <xsl:template match="*[name()='relatedPlatforms']">
        <xsl:element name="platforms">
            <xsl:for-each select="*">
                <xsl:variable name="id" select="@id"/>
                <xsl:for-each select="key('keyPlatform',$id)">
                    <xsl:element name="item">
                        <xsl:value-of select="."/>
                    </xsl:element>
                </xsl:for-each>
            </xsl:for-each>
        </xsl:element>
    </xsl:template>
    <xsl:template match="*[name()='publisher']">
        <xsl:element name="publisher">
            <xsl:value-of select="."/>
        </xsl:element>
    </xsl:template>
    <xsl:template match="*[name()='rating']">
        <xsl:element name="rating">
            <xsl:element name="source">
                <xsl:value-of select="@source"/>
            </xsl:element>
            <xsl:element name="percentageRating">
                <xsl:variable name="maxRating" select="@max"/>
                <xsl:variable name="rating" select="."/>
                <xsl:value-of select="($rating * 100) div $maxRating"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='PEGI']">
        <xsl:element name="PEGI">
            <xsl:variable name="label" select="@label"/>
            <xsl:element name="label">
                <xsl:value-of select="$label"/>
            </xsl:element>
            <xsl:element name="list">
            <xsl:for-each select="*">
                <xsl:variable name="id" select="@id"/>
                <xsl:for-each select="key('keyPEGI',$id)">
                    <xsl:element name="item">
                        <xsl:value-of select="."/>
                    </xsl:element>
                </xsl:for-each>
            </xsl:for-each></xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='coverArt']">
        <xsl:variable name="coverArtBaseUrl" select="'./coverart/'"/>
        <xsl:variable name="image" select="@src"/>
        <xsl:element name="coverArt">
            <xsl:value-of select="concat($coverArtBaseUrl,$image)"/>
        </xsl:element>
    </xsl:template>

    <xsl:template match="*">
        <xsl:variable name="n" select="name()"/>
        <xsl:element name="{$n}">
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
